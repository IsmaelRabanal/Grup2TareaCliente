import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TareaDto } from '../common/tarea.dto';
import { UpsertTareaDto } from '../common/upsert-tarea.dto';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  constructor(public router: Router, private tareasService: TareasService, private formBuilder: FormBuilder) {}

  tareas: TareaDto[];
  error: string;
  loading = false;
  editForm: FormGroup;

  ngOnInit(): void {
    this.loading = true;

    this.editForm = this.formBuilder.group({
      id: ["", []],
      contenido: ["", []],
      completada: [false, []],
    });

    this.updateTable();
  }

  createTarea(): void {
    const upsertTareaDto: UpsertTareaDto = {
      id: this.editForm.controls.id.value,
      contenido: this.editForm.controls.contenido.value,
      completada: this.editForm.controls.completada.value,
    };

    this.tareasService.createTarea(upsertTareaDto).subscribe({
      error: (err) => console.error(err),
      complete: () => (this.updateTable()),
    });
  }

  updateTarea(): void {
    const upsertTareaDto: UpsertTareaDto = {
      id: this.editForm.controls.id.value,
      contenido: this.editForm.controls.contenido.value,
      completada: this.editForm.controls.completada.value,
    };

    this.tareasService.updateTarea(upsertTareaDto).subscribe({
      error: (err) => console.error(err),
      complete: () => (this.updateTable()),
    });
  }


  deleteTarea(id: string): void {
    this.tareasService.deleteTarea(id).subscribe({
      error: (err) => console.error(err),
      complete: () => (this.updateTable()),
    });
  }

  updateTable(): void{
    this.tareasService
     .getAll()
     .subscribe({
      next: (tareasReceived: TareaDto[]) => {
        this.tareas = tareasReceived;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => (this.loading = false),
    });
  }
}
