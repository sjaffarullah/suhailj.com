import Github from "../assets/icons/github.png"
import VSCode from "../assets/icons/VSCode.png"
import Terraform from "../assets/icons/terraform.png"
import Bash from "../assets/icons/bash.png"
import C from "../assets/icons/c.png"
import Azure from "../assets/icons/azure.png"
import AWS from "../assets/icons/aws.png"
import Python from "../assets/icons/python.png"
import Docker from "../assets/icons/Docker.png"
import kubernetes from "../assets/icons/kubernetes.png"
import linux from "../assets/icons/linux.png"
import ansible from "../assets/icons/ansible.png"
import mysql from "../assets/icons/mysql.png"

export const TECH_STACK_CATEGORIES = [
    {
      title: "Tools and Technologies",
      items: [
        {
          name: "Azure",
          category: "Cloud",
          icon: Azure,
          url: "https://portal.azure/",
        },
        {
          name: "AWS",
          category: "Cloud",
          icon: AWS,
          url: "https://aws.amazon.com/",
        },
        {
            name: "Terraform",
            category: "IaC Tool",
            icon: Terraform,
            url: "https://www.terraform.io/",
        },
        {
            name: "Docker",
            category: "Virtualization",
            icon: Docker,
            url: "https://www.docker.com/",
        },
        {
          name: "Kubernetes",
          category: "Automation",
          icon: kubernetes,
          url: "https://kubernetes.io/",
        },
        {
          name: "Ansible",
          category: "Automation",
          icon: ansible,
          url: "https://www.ansible.com/",
        },
        {
            name: "Python",
            category: "Language",
            icon: Python,
            url: "https://www.python.org/",
        },
        {
            name: "C++",
            category: "Language",
            icon: C,
            url: "https://isocpp.org/",
        },
        {
          name: "MySQL",
          category: "Database",
          icon: mysql,
          url: "https://www.mysql.com/",
        },
        {
            name: "GitHub",
            category: "Version Control",
            icon: Github,
            url: "https://github.com/",
        },
        {
          name: "VS Code",
          category: "Developer Tools",
          icon: VSCode,
          url: "https://code.visualstudio.com/",
        },
        {
          name: "Linux",
          category: "OS",
          icon: linux,
          url: "https://www.linux.org/",
       },
       {
          name: "Bash",
          category: "CLI",
          icon: Bash,
          url: "https://code.visualstudio.com/",
      },
      ],
    },
  ];