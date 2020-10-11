import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TareaDto } from '../common/tarea.dto';
import { UpsertTareaDto } from '../common/upsert-tarea.dto';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  getAll(): Observable<TareaDto[]> {
    return this.http.get<any>(`http://localhost:8080/tareas/getAll`)
    .pipe(
      map((tareasDto: TareaDto[]) => {
        return tareasDto;
      })
    );
  }

  getById(tareaId: string): Observable<TareaDto> {
    return this.http.get<any>(`http://localhost:8080/tareas/${tareaId}`)
    .pipe(
      map((tareaDto: TareaDto) => {
        return tareaDto;
      })
    );
  }

  updateTarea(upsertTareaDto: UpsertTareaDto): any{
    return this.http.put<any>(`http://localhost:8080/tareas/update?id=${upsertTareaDto.id}&contenido=${upsertTareaDto.contenido}&completada=${upsertTareaDto.completada}`, {});
  }

  deleteTarea(id: string): any{
    return this.http.post<any>(`http://localhost:8080/tareas/delete?id=${id}`, {});
  }

  createTarea(upsertTareaDto: UpsertTareaDto): any{
    return this.http.post<any>(`http://localhost:8080/tareas/create?id=${upsertTareaDto.id}&contenido=${upsertTareaDto.contenido}&completada=${upsertTareaDto.completada}`, {});
  }
}
