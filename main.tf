terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "bucket_aula_24" {
  bucket = "davomayu24-09-26"

  tags = {
    Name = "terraform-s3-aula"
  }
}