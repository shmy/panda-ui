pipeline {
  agent any
  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash'
        sh 'source ~/.nvm/nvm.sh'
        sh 'nvm install node '
        sh 'node -v'
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
