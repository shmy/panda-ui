pipeline {
  agent any
  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      docker.image('node:alpine').inside {
        sh 'node -v'
      }
    }

    stage('Deploy') {
      steps {
          sh 'docker --version'
        }
    }
  }
}
