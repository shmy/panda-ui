pipeline {
  agent { docker { image 'node:12.14.0-alpine'} }
  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
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
