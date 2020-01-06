pipeline {
  agent any
  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'pwd'
        sh 'wget http://www.baidu.com'
        sh '/bin/node -v'
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
