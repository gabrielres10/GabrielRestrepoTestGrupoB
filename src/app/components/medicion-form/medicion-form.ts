import { Component } from '@angular/core';
import { CustomInput } from '../input/input';
import { Textarea } from '../textarea/textarea';
import { Dropdown } from '../dropdown/dropdown';
import { Checkbox } from '../checkbox/checkbox';
import { Button } from '../button/button';

@Component({
  selector: 'app-medicion-form',
  standalone: true,
  imports: [CustomInput, Textarea, Dropdown, Checkbox, Button],
  template: `
    <div class="medicion-bg">
      <div class="medicion-card">
        <div class="medicion-header">
          <h2>Crear una medición</h2>
          <span class="subtitle">Permita de nuevas mediciones de participación</span>
          <p class="desc">
            Es el proceso de evaluar cuán involucradas están las personas en una actividad, usando indicadores como asistencia, interacciones o aportes. Se recogen datos, se analizan y se obtiene un resultado que ayuda a mejorar el compromiso y la estrategia.
          </p>
        </div>
        <form (ngSubmit)="crearMedicion()" autocomplete="off">
          <app-input
            label="Nombre de la medición"
            placeholder="Inserte el nombre"
            [required]="true"
            [value]="nombre"
            (valueChange)="nombre = $event"
            id="nombre"
            size="normal"
          ></app-input>
          <app-textarea
            label="Descripción de la medición"
            placeholder="Inserte comentarios u observaciones"
            [value]="descripcion"
            (valueChange)="descripcion = $event"
            id="descripcion"
            [required]="false"
          ></app-textarea>
          <app-dropdown
            label="Estado"
            [required]="true"
            [options]="estados"
            [value]="estado"
            (valueChange)="estado = $event"
            id="estado"
          ></app-dropdown>
          <div class="config-section">
            <span class="config-title">Configuración especial</span>
            <app-checkbox
              label="Implementación obligatoria"
              [checked]="implementacionObligatoria"
              (checkedChange)="implementacionObligatoria = $event"
            ></app-checkbox>
          </div>
          <app-button
            label="Crear medición"
            type="submit"
            variant="primary"
          ></app-button>
          <app-button
            label="Cancelar creación"
            type="button"
            variant="secondary"
            (btnClick)="cancelar()"
          ></app-button>
        </form>
      </div>
    </div>
  `,
  styles: `
    .medicion-bg {
      min-height: 100vh;
      background: #E5E8EB;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
    }
    .medicion-card {
      max-width: 600px;
      width: 100%;
      margin: 40px auto;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
      padding: 36px 32px 28px 32px;
      display: flex;
      flex-direction: column;
      gap: 0;
    }
    .medicion-header h2 {
      color: #0041A3;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2px;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
    }
    .subtitle {
      color: #9EACB3;
      font-size: 1rem;
      margin-bottom: 10px;
      display: block;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
    }
    .desc {
      color: #70777B;
      font-size: 1.02rem;
      margin-bottom: 18px;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
    }
    .config-section {
      margin: 18px 0 10px 0;
    }
    .config-title {
      color: #0041A3;
      font-weight: 700;
      font-size: 1.08rem;
      margin-bottom: 8px;
      display: block;
      font-family: 'Solomon Sans Normal', Arial, sans-serif;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  `
})
export class MedicionForm {
  nombre = '';
  descripcion = '';
  estado = 'activo';
  implementacionObligatoria = true;
  estados = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' }
  ];

  crearMedicion() {
    // Aquí iría la lógica de creación
    alert('Medición creada');
  }

  cancelar() {
    // Aquí iría la lógica de cancelación
    this.nombre = '';
    this.descripcion = '';
    this.estado = 'activo';
    this.implementacionObligatoria = true;
  }
}
