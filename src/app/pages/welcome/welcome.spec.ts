// Pruebas unitarias para WelcomeComponent - HU-008: Acceso al Módulo de Educación
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WelcomeComponent } from './welcome';

describe('WelcomeComponent - HU-008: Acceso al Módulo de Educación', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                WelcomeComponent,
                RouterTestingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // Pruebas de inicialización del componente
    describe('Inicialización del componente', () => {
        it('debería crear el componente correctamente', () => {
            expect(component).toBeTruthy();
        });

        it('debería inicializar con los datos correctos de la aplicación', () => {
            expect(component.appName).toBe('Bohío');
            expect(component.appDescription).toBe('Plataforma Financiera Inclusiva para República Dominicana');
        });

        it('debería tener la lista de usuarios objetivo definida', () => {
            expect(component.targetUsers).toBeDefined();
            expect(component.targetUsers.length).toBe(6);
        });
    });

    // Pruebas de visualización de datos
    describe('Visualización de datos de la aplicación', () => {
        it('debería mostrar el nombre de la aplicación en el header', () => {
            const titleElement: DebugElement = fixture.debugElement.query(By.css('.welcome-title'));
            expect(titleElement.nativeElement.textContent.trim()).toBe('Bohío');
        });

        it('debería mostrar la descripción de la aplicación en el header', () => {
            const subtitleElement: DebugElement = fixture.debugElement.query(By.css('.welcome-subtitle'));
            expect(subtitleElement.nativeElement.textContent.trim()).toBe('Plataforma Financiera Inclusiva para República Dominicana');
        });

        it('debería mostrar el título de bienvenida principal', () => {
            const headingElement: DebugElement = fixture.debugElement.query(By.css('#welcome-heading'));
            expect(headingElement.nativeElement.textContent.trim()).toBe('Bienvenido a tu nueva oportunidad financiera');
        });

        it('debería mostrar la descripción de bienvenida', () => {
            const descriptionElement: DebugElement = fixture.debugElement.query(By.css('.welcome-description'));
            expect(descriptionElement.nativeElement.textContent.trim()).toBe('Crea tu cuenta bancaria de forma simple y segura. Estamos aquí para ayudarte en cada paso del proceso.');
        });
    });

    // Pruebas de usuarios objetivo (relacionado con educación financiera)
    describe('Sección de usuarios objetivo', () => {
        it('debería mostrar el título de usuarios objetivo', () => {
            const targetHeading: DebugElement = fixture.debugElement.query(By.css('#target-users-heading'));
            expect(targetHeading.nativeElement.textContent.trim()).toBe('Diseñado especialmente para:');
        });

        it('debería mostrar todos los usuarios objetivo en la lista', () => {
            const userItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.target-user-item'));
            expect(userItems.length).toBe(6);
        });

        it('debería mostrar cada usuario objetivo con su texto correspondiente', () => {
            const userTexts: DebugElement[] = fixture.debugElement.queryAll(By.css('.target-user-text'));
            
            expect(userTexts[0].nativeElement.textContent.trim()).toBe('Migrantes en proceso de regularización');
            expect(userTexts[1].nativeElement.textContent.trim()).toBe('Personas con baja alfabetización digital');
            expect(userTexts[2].nativeElement.textContent.trim()).toBe('Trabajadores informales');
            expect(userTexts[3].nativeElement.textContent.trim()).toBe('Residentes de zonas rurales');
            expect(userTexts[4].nativeElement.textContent.trim()).toBe('Adultos mayores');
            expect(userTexts[5].nativeElement.textContent.trim()).toBe('Personas con discapacidades visuales');
        });

        it('debería mostrar iconos de verificación para cada usuario objetivo', () => {
            const userIcons: DebugElement[] = fixture.debugElement.queryAll(By.css('.target-user-icon'));
            expect(userIcons.length).toBe(6);
            
            userIcons.forEach(icon => {
                expect(icon.nativeElement.textContent.trim()).toBe('✓');
            });
        });
    });

    // Pruebas de características (relacionado con educación financiera)
    describe('Sección de características de Bohío', () => {
        it('debería mostrar el título de características', () => {
            const featuresHeading: DebugElement = fixture.debugElement.query(By.css('#features-heading'));
            expect(featuresHeading.nativeElement.textContent.trim()).toBe('¿Por qué elegir Bohío?');
        });

        it('debería mostrar tres características principales', () => {
            const featureItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.feature-item'));
            expect(featureItems.length).toBe(3);
        });

        it('debería mostrar la característica de seguridad', () => {
            const featureItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.feature-item'));
            const securityFeature = featureItems[0];
            
            const icon = securityFeature.query(By.css('.feature-icon'));
            const title = securityFeature.query(By.css('.feature-title'));
            const description = securityFeature.query(By.css('.feature-description'));
            
            expect(icon.nativeElement.textContent.trim()).toBe('🔒');
            expect(title.nativeElement.textContent.trim()).toBe('Seguro y Confiable');
            expect(description.nativeElement.textContent.trim()).toBe('Tus datos están protegidos con la más alta seguridad');
        });

        it('debería mostrar la característica de facilidad de uso', () => {
            const featureItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.feature-item'));
            const usabilityFeature = featureItems[1];
            
            const icon = usabilityFeature.query(By.css('.feature-icon'));
            const title = usabilityFeature.query(By.css('.feature-title'));
            const description = usabilityFeature.query(By.css('.feature-description'));
            
            expect(icon.nativeElement.textContent.trim()).toBe('📱');
            expect(title.nativeElement.textContent.trim()).toBe('Fácil de Usar');
            expect(description.nativeElement.textContent.trim()).toBe('Diseñado para ser simple y accesible para todos');
        });

        it('debería mostrar la característica de soporte personalizado', () => {
            const featureItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.feature-item'));
            const supportFeature = featureItems[2];
            
            const icon = supportFeature.query(By.css('.feature-icon'));
            const title = supportFeature.query(By.css('.feature-title'));
            const description = supportFeature.query(By.css('.feature-description'));
            
            expect(icon.nativeElement.textContent.trim()).toBe('🤝');
            expect(title.nativeElement.textContent.trim()).toBe('Soporte Personalizado');
            expect(description.nativeElement.textContent.trim()).toBe('Asistencia disponible cuando la necesites');
        });
    });

    // Pruebas de navegación (acceso a funcionalidades)
    describe('Enlaces de navegación', () => {
        it('debería tener un enlace para modo asistido', () => {
            const assistedModeLink: DebugElement = fixture.debugElement.query(By.css('a[routerLink="/registro/modo-asistido"]'));
            expect(assistedModeLink).toBeTruthy();
            expect(assistedModeLink.nativeElement.textContent.trim()).toBe('Modo Asistido');
        });

        it('debería tener descripción para el botón de modo asistido', () => {
            const assistedModeDescription: DebugElement = fixture.debugElement.query(By.css('#assisted-mode-description'));
            
            expect(assistedModeDescription).toBeTruthy();
            expect(assistedModeDescription.nativeElement.textContent.trim()).toBe('Obtén ayuda adicional durante el proceso');
        });

        // HU-008: Acceso al Módulo de Educación
        it('debería tener un botón para acceder al módulo de educación financiera', () => {
            const educationButton: DebugElement = fixture.debugElement.query(By.css('a[routerLink="/educacion"]'));
            expect(educationButton).toBeTruthy();
            expect(educationButton.nativeElement.textContent.trim()).toBe('Educación Financiera');
        });

        it('debería tener descripción para el botón de educación financiera', () => {
            const educationDescription: DebugElement = fixture.debugElement.query(By.css('#education-description'));
            
            expect(educationDescription).toBeTruthy();
            expect(educationDescription.nativeElement.textContent.trim()).toBe('Aprende sobre finanzas personales de forma simple');
        });

        it('debería tener las clases CSS correctas en el botón de educación', () => {
            const educationButton: DebugElement = fixture.debugElement.query(By.css('a[routerLink="/educacion"]'));
            
            expect(educationButton.nativeElement.classList.contains('btn')).toBe(true);
            expect(educationButton.nativeElement.classList.contains('btn--tertiary')).toBe(true);
            expect(educationButton.nativeElement.classList.contains('btn--large')).toBe(true);
            expect(educationButton.nativeElement.classList.contains('btn--full-width')).toBe(true);
            expect(educationButton.nativeElement.classList.contains('touch-target')).toBe(true);
        });

        it('debería tener atributos de accesibilidad en el botón de educación', () => {
            const educationButton: DebugElement = fixture.debugElement.query(By.css('a[routerLink="/educacion"]'));
            
            expect(educationButton.nativeElement.getAttribute('role')).toBe('button');
            expect(educationButton.nativeElement.getAttribute('aria-describedby')).toBe('education-description');
        });
    });

    // Pruebas de accesibilidad (WCAG 2.1)
    describe('Características de accesibilidad', () => {
        it('debería tener atributos aria-labelledby en las secciones', () => {
            const welcomeIntro: DebugElement = fixture.debugElement.query(By.css('section[aria-labelledby="welcome-heading"]'));
            const targetUsers: DebugElement = fixture.debugElement.query(By.css('section[aria-labelledby="target-users-heading"]'));
            const features: DebugElement = fixture.debugElement.query(By.css('section[aria-labelledby="features-heading"]'));
            
            expect(welcomeIntro).toBeTruthy();
            expect(targetUsers).toBeTruthy();
            expect(features).toBeTruthy();
        });

        it('debería tener IDs únicos para los encabezados', () => {
            const welcomeHeading: DebugElement = fixture.debugElement.query(By.css('#welcome-heading'));
            const targetUsersHeading: DebugElement = fixture.debugElement.query(By.css('#target-users-heading'));
            const featuresHeading: DebugElement = fixture.debugElement.query(By.css('#features-heading'));
            
            expect(welcomeHeading).toBeTruthy();
            expect(targetUsersHeading).toBeTruthy();
            expect(featuresHeading).toBeTruthy();
        });

        it('debería tener atributos aria-hidden en iconos decorativos', () => {
            const userIcons: DebugElement[] = fixture.debugElement.queryAll(By.css('.target-user-icon[aria-hidden="true"]'));
            const featureIcons: DebugElement[] = fixture.debugElement.queryAll(By.css('.feature-icon[aria-hidden="true"]'));
            
            expect(userIcons.length).toBe(6);
            expect(featureIcons.length).toBe(3);
        });

        it('debería tener atributos aria-describedby en el botón de acción', () => {
            const assistedModeButton: DebugElement = fixture.debugElement.query(By.css('a[aria-describedby="assisted-mode-description"]'));
            
            expect(assistedModeButton).toBeTruthy();
        });

        it('debería tener clase sr-only para contenido solo para lectores de pantalla', () => {
            const srOnlyElement: DebugElement = fixture.debugElement.query(By.css('.sr-only'));
            expect(srOnlyElement).toBeTruthy();
            expect(srOnlyElement.nativeElement.textContent.trim()).toBe('Acciones disponibles');
        });

        it('debería tener atributos role en los botones', () => {
            const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('a[role="button"]'));
            expect(buttons.length).toBe(3);
        });
    });

    // Pruebas de estructura HTML
    describe('Estructura HTML', () => {
        it('debería tener la estructura correcta de contenedores', () => {
            const welcomePage: DebugElement = fixture.debugElement.query(By.css('.welcome-page'));
            const container: DebugElement = fixture.debugElement.query(By.css('.container-sm'));
            const header: DebugElement = fixture.debugElement.query(By.css('.welcome-header'));
            const main: DebugElement = fixture.debugElement.query(By.css('.welcome-content'));
            
            expect(welcomePage).toBeTruthy();
            expect(container).toBeTruthy();
            expect(header).toBeTruthy();
            expect(main).toBeTruthy();
        });

        it('debería tener las clases CSS correctas para los elementos principales', () => {
            const logo: DebugElement = fixture.debugElement.query(By.css('.welcome-logo'));
            const intro: DebugElement = fixture.debugElement.query(By.css('.welcome-intro'));
            const targetUsers: DebugElement = fixture.debugElement.query(By.css('.welcome-target-users'));
            const actions: DebugElement = fixture.debugElement.query(By.css('.welcome-actions'));
            const features: DebugElement = fixture.debugElement.query(By.css('.welcome-features'));
            
            expect(logo).toBeTruthy();
            expect(intro).toBeTruthy();
            expect(targetUsers).toBeTruthy();
            expect(actions).toBeTruthy();
            expect(features).toBeTruthy();
        });

        it('debería tener la estructura correcta de botones', () => {
            const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.welcome-buttons .btn'));
            expect(buttons.length).toBe(3);
            
            buttons.forEach(button => {
                expect(button.nativeElement.classList.contains('btn--large')).toBe(true);
                expect(button.nativeElement.classList.contains('btn--full-width')).toBe(true);
                expect(button.nativeElement.classList.contains('touch-target')).toBe(true);
            });
        });
    });

    // Pruebas de iteración con *ngFor
    describe('Iteración de datos con *ngFor', () => {
        it('debería renderizar correctamente la lista de usuarios objetivo', () => {
            // Simular cambio en los datos
            component.targetUsers = ['Usuario 1', 'Usuario 2', 'Usuario 3'];
            fixture.detectChanges();
            
            const userItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.target-user-item'));
            expect(userItems.length).toBe(3);
            
            const userTexts: DebugElement[] = fixture.debugElement.queryAll(By.css('.target-user-text'));
            expect(userTexts[0].nativeElement.textContent.trim()).toBe('Usuario 1');
            expect(userTexts[1].nativeElement.textContent.trim()).toBe('Usuario 2');
            expect(userTexts[2].nativeElement.textContent.trim()).toBe('Usuario 3');
        });

        it('debería manejar lista vacía de usuarios objetivo', () => {
            component.targetUsers = [];
            fixture.detectChanges();
            
            const userItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.target-user-item'));
            expect(userItems.length).toBe(0);
        });
    });
});
