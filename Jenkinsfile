pipeline {
    agent {
        docker {
            image 'node:12.14.0-alpine'
        }
    }

  stages {


    stage('Deploy') {
      steps {
          sh 'docker --version'
        }
    }
  }
}
