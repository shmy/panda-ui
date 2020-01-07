#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }
    stage('Build') {
      environment {
        CI = 'true'
      }
      sh 'mkdir -p ./.sonar/cache'
      sh 'docker run --user="$(id -u):$(id -g)" -e SONAR_HOST_URL=http://52.82.10.96:9000 -e SONAR_LOGIN=718e7ca6ed91dfe1b706cce2339ea89fc4ab6f02 -i -v "$PWD:/usr/src" sonarsource/sonar-scanner-cli'
    }

    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
