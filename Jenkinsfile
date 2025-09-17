pipeline {
    agent any

    tools {
        nodejs 'myNode24'
    }

    environment {
        // Define el nombre de tu imagen Docker. Cámbialo si lo necesitas.
        IMAGE_NAME = 'devops-app'
        // Define el nombre de usuario de tu registro de contenedores (ej. Docker Hub)
        REGISTRY_USER = 'your-dockerhub-username'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
//                 git branch: 'master',
//                 url: 'https://github.com/nassao/devops-25-08-ejemplo1'
            }
        }

        stage('Install'){
            steps {
                sh 'npm ci'
            }
        }

        stage('Unit tests'){
            steps {
                //sh 'npm run ci:test'
                echo 'Skiping tests...'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('mySonarQubeServer') {
                    script {
                        def scannerHome = tool 'mySonarQubeScanner'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    // Aborta el pipeline si el Quality Gate está FAILED
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage ('Build (Angular)') {
            steps {
                sh 'npm run build'
                archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Construyendo la imagen Docker: ${IMAGE_NAME}"
                    // Ejecuta el comando de build de Docker
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        /*
        // --- PASO OPCIONAL: Descomenta esta etapa para subir tu imagen a Docker Hub ---
        stage('Push Docker Image') {
            steps {
                script {
                    // Asegúrate de haber configurado las credenciales en Jenkins
                    // con el ID 'dockerhub-credentials'
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        echo "Iniciando sesión en el registro..."
                        sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"

                        echo "Etiquetando y subiendo la imagen: ${REGISTRY_USER}/${IMAGE_NAME}"
                        // Etiqueta la imagen con tu usuario y el nombre
                        sh "docker tag ${IMAGE_NAME} ${REGISTRY_USER}/${IMAGE_NAME}"
                        // Sube la imagen al registro
                        sh "docker push ${REGISTRY_USER}/${IMAGE_NAME}"
                    }
                }
            }
        }
        */
    }

    post {
        always {
            // Limpieza final
            echo "Pipeline finalizado."
            // Opcional: Limpiar sesión de Docker si se usó el paso de Push
            // sh 'docker logout'
        }
    }

    }
}
