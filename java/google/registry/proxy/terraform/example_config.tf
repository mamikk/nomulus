terraform {
  backend "gcs" {
    # The name of the GCS bucket that stores the terraform.tfstate file.
    bucket = "YOUR_GCS_BUCKET"
    prefix = "terraform/state"
  }
}

module "proxy" {
  source = "../../modules"
  proxy_project_name = "YOUR_PROXY_PROJECT"
  nomulus_project_name = "YOUR_NOMULUS_GPROJECT"
  gcr_project_name = "YOUR_GCR_PROJECT"
  proxy_domain_name = "YOUR_PROXY_DOMAIN"
}

output "proxy_service_account_client_id" {
  value = "${module.proxy.proxy_service_account_client_id}"
}

output "proxy_name_servers" {
  value = "${module.proxy.proxy_name_servers}"
}

output "proxy_instance_groups" {
  value = "${module.proxy.proxy_instance_groups}"
}

output "proxy_ip_addresses" {
  value = {
    ipv4 = "${module.proxy.proxy_ipv4_address}",
    ipv6 = "${module.proxy.proxy_ipv6_address}"
  }
}

