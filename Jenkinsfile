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
        sh 'chmod +x ./node-v12.14.0-linux-x64/bin/node'
        sh 'chmod +x ./node-v12.14.0-linux-x64/bin/npm'

        sh '/var/jenkins_home/jobs/panda-ui/branches/master/workspace/node-v12.14.0-linux-x64/bin/node -v'
        sh '/var/jenkins_home/jobs/panda-ui/branches/master/workspace/node-v12.14.0-linux-x64/bin/npm -v'
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
