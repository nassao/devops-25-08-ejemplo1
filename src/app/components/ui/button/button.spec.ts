// Pruebas unitarias para ButtonComponent - Bohío
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('Propiedades por defecto', () => {
    it('debe tener valores por defecto correctos', () => {
      expect(component.type).toBe('button');
      expect(component.variant).toBe('primary');
      expect(component.size).toBe('medium');
      expect(component.disabled).toBe(false);
      expect(component.loading).toBe(false);
      expect(component.fullWidth).toBe(false);
      expect(component.icon).toBe('');
      expect(component.iconPosition).toBe('left');
      expect(component.ariaLabel).toBe('');
    });
  });

  describe('onClick', () => {
    it('debe emitir evento click cuando no está deshabilitado ni cargando', () => {
      spyOn(component.click, 'emit');

      component.onClick();

      expect(component.click.emit).toHaveBeenCalled();
    });

    it('no debe emitir evento click cuando está deshabilitado', () => {
      component.disabled = true;
      spyOn(component.click, 'emit');

      component.onClick();

      expect(component.click.emit).not.toHaveBeenCalled();
    });

    it('no debe emitir evento click cuando está cargando', () => {
      component.loading = true;
      spyOn(component.click, 'emit');

      component.onClick();

      expect(component.click.emit).not.toHaveBeenCalled();
    });

    it('no debe emitir evento click cuando está deshabilitado y cargando', () => {
      component.disabled = true;
      component.loading = true;
      spyOn(component.click, 'emit');

      component.onClick();

      expect(component.click.emit).not.toHaveBeenCalled();
    });
  });

  describe('buttonClasses', () => {
    it('debe generar clases CSS básicas', () => {
      const classes = component.buttonClasses;

      expect(classes).toContain('btn');
      expect(classes).toContain('btn--primary');
      expect(classes).toContain('btn--medium');
    });

    it('debe incluir clase de ancho completo cuando fullWidth es true', () => {
      component.fullWidth = true;

      const classes = component.buttonClasses;

      expect(classes).toContain('btn--full-width');
    });

    it('debe incluir clase disabled cuando disabled es true', () => {
      component.disabled = true;

      const classes = component.buttonClasses;

      expect(classes).toContain('btn--disabled');
    });

    it('debe incluir clase loading cuando loading es true', () => {
      component.loading = true;

      const classes = component.buttonClasses;

      expect(classes).toContain('btn--loading');
    });

    it('debe incluir clase de icono cuando icon está presente', () => {
      component.icon = 'user';

      const classes = component.buttonClasses;

      expect(classes).toContain('btn--icon-left');
    });

    it('debe incluir clase de posición de icono correcta', () => {
      component.icon = 'arrow';
      component.iconPosition = 'right';

      const classes = component.buttonClasses;

      expect(classes).toContain('btn--icon-right');
    });

    it('debe filtrar clases vacías', () => {
      component.fullWidth = false;
      component.disabled = false;
      component.loading = false;
      component.icon = '';

      const classes = component.buttonClasses;

      expect(classes).not.toContain('btn--full-width');
      expect(classes).not.toContain('btn--disabled');
      expect(classes).not.toContain('btn--loading');
      expect(classes).not.toContain('btn--icon-left');
    });

    it('debe manejar múltiples variantes', () => {
      const variants = ['primary', 'secondary', 'accent', 'ghost'];

      variants.forEach(variant => {
        component.variant = variant as any;
        const classes = component.buttonClasses;
        expect(classes).toContain(`btn--${variant}`);
      });
    });

    it('debe manejar múltiples tamaños', () => {
      const sizes = ['small', 'medium', 'large'];

      sizes.forEach(size => {
        component.size = size as any;
        const classes = component.buttonClasses;
        expect(classes).toContain(`btn--${size}`);
      });
    });

    it('debe manejar múltiples tipos', () => {
      const types = ['button', 'submit', 'reset'];

      types.forEach(type => {
        component.type = type as any;
        expect(component.type).toBe(type);
      });
    });
  });

  describe('Accesibilidad', () => {
    it('debe tener ariaLabel configurable', () => {
      const testLabel = 'Botón de prueba';
      component.ariaLabel = testLabel;

      expect(component.ariaLabel).toBe(testLabel);
    });
  });

  describe('Renderizado del DOM', () => {
    it('debe renderizar con las clases CSS correctas', () => {
      component.variant = 'secondary';
      component.size = 'large';
      component.fullWidth = true;

      fixture.detectChanges();

      const buttonElement = fixture.nativeElement.querySelector('button');
      expect(buttonElement).toBeTruthy();
      expect(buttonElement.className).toContain('btn--secondary');
      expect(buttonElement.className).toContain('btn--large');
      expect(buttonElement.className).toContain('btn--full-width');
    });

    it('debe aplicar atributos disabled correctamente', () => {
      component.disabled = true;
      fixture.detectChanges();

      const buttonElement = fixture.nativeElement.querySelector('button');
      expect(buttonElement.disabled).toBe(true);
    });

    it('debe aplicar atributos type correctamente', () => {
      component.type = 'submit';
      fixture.detectChanges();

      const buttonElement = fixture.nativeElement.querySelector('button');
      expect(buttonElement.type).toBe('submit');
    });
  });
});
