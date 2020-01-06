pipeline {
  agent { docker { node : '12.14.0'} }
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
