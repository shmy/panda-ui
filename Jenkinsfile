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
        sh 'ls -a'
        sh 'chmod +x ./node-v12.14.0-linux-x64.tar.xz/bin/node'
        sh './node-v12.14.0-linux-x64.tar.xz/bin/node -v'
        sh '/bin/npm -v'
        sh '/bin/npm config set registry https://registry.npm.taobao.org'
        sh '/bin/npm config get registry'

      }
    }

    stage('Deploy') {
      steps {
          sh 'docker --version'
        }
    }
  }
}
