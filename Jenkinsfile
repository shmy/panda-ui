pipeline {
  agent { docker 'node:12.14.0' }

  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config get registry'

      }
    }

    stage('Deploy') {
      steps {
          sh 'docker --version'
        }
    }
  }
}
