pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo 'node -v || true'
        echo 'npm ci'
      }
    }

    stage('Run Tests') {
      steps {
        echo 'npm test'
      }
    }

    stage('Deploy (placeholder)') {
      steps {
        echo 'Deploying... (replace with real deploy script)'
        echo 'echo "Deployment successful!"'
      }
    }
  }

  post {
    success { echo '✅ Pipeline succeeded' }
    failure { echo '❌ Pipeline failed' }
  }
}
