pipeline {
  agent any
  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'wget https://nodejs.org/dist/v12.14.0/node-v12.14.0-linux-x64.tar.xz'
        sh 'tar -xf node-v12.14.0-linux-x64.tar.xz'
        sh '$PWD/node-v12.14.0-linux-x64/bin/node -v'
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
