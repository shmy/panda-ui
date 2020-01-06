pipeline {
  agent any
  def node_home
  stages {
    stage('Preparation') {
         node_home = tool 'node12'
     }
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh '${node_home}/bin/node -v'
        sh '${node_home}/bin/npm -v'
        sh '${node_home}/bin/npm config set registry https://registry.npm.taobao.org'
        sh '${node_home}/bin/npm config get registry'

      }
    }

    stage('Deploy') {
      steps {
          sh 'docker --version'
        }
    }
  }
}
