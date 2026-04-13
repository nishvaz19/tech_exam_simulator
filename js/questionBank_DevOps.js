/* ======================================================
   DEVOPS & OBSERVABILITY ARCHITECT QUESTION BANK
   Topics: Kubernetes (AKS/EKS), CI/CD (GitOps), ELK, SRE, Kafka, DevSecOps
   Format: High-Order Thinking Skills (HOTS) / Scenario-Based
   ====================================================== */

const devOpsQuestionBank = [
  /* ======================================================
     KUBERNETES & CLUSTER GOVERNANCE (AKS/EKS focus)
     ====================================================== */
  {
    id: 1,
    difficulty: "hard",
    category: "k8s-architecture",
    question: "A high-traffic microservice on AKS is experiencing sporadic 503 errors during scale-up events. Investigation shows that new pods are receiving traffic before the application is fully ready to process requests. Which configuration fix directly addresses this 'cold start' issue?",
    options: [
      "Increasing the 'replicas' count in the Horizontal Pod Autoscaler",
      "Implementing a 'readinessProbe' with an appropriate 'initialDelaySeconds'",
      "Implementing a 'livenessProbe' to restart the container",
      "Switching from Azure CNI to Kubenet to reduce IP allocation time"
    ],
    answer: 1,
    explanation: "The readinessProbe determines when a pod is ready to accept traffic. If missing or misconfigured, the Service might route traffic to a pod that is still initializing, leading to 503s.",
    hint: "Differentiate between a probe that restarts a container vs. one that controls traffic routing."
  },
  {
    id: 2,
    difficulty: "hard",
    category: "k8s-security",
    question: "Your organization requires that no container in the EKS cluster runs as a privileged user. Which combination of tools is best suited to enforce this across multiple teams without manual code reviews?",
    options: [
      "IAM Roles for Service Accounts (IRSA)",
      "AWS WAF and Security Groups",
      "Kyverno or OPA Gatekeeper with a 'MustRunAsNonRoot' policy",
      "NetworkPolicies and Calico CNI"
    ],
    answer: 2,
    explanation: "Policy engines like Kyverno or Gatekeeper act as admission controllers, intercepting requests to the Kubernetes API and rejecting YAML that violates security constraints.",
    hint: "Think about 'Policy as Code' at the cluster admission level."
  },
  {
    id: 3,
    difficulty: "medium",
    category: "k8s-networking",
    question: "An AKS cluster is running out of IP addresses in its subnet, preventing new pods from being scheduled. The team is currently using Azure CNI. What is the most sustainable architectural solution?",
    options: [
      "Delete old logs in Log Analytics to free up space",
      "Migrate to Azure CNI Overlay or use Dynamic IP allocation",
      "Reduce the number of replicas for all deployments",
      "Change the Load Balancer SKU from Basic to Standard"
    ],
    answer: 1,
    explanation: "Azure CNI Overlay allows pods to use a private CIDR range separate from the VNet, significantly reducing the IP pressure on the underlying subnet.",
    hint: "How can we decouple Pod IPs from the VNet IP space?"
  },

  /* ======================================================
     OBSERVABILITY & SRE (ELK / Prometheus / SRE)
     ====================================================== */
  {
    id: 4,
    difficulty: "hard",
    category: "observability-elk",
    question: "During a major sale event, your ELK stack experiences massive ingestion lag. The Logstash buffer is full, and Elasticsearch shows high 'JVM Memory Pressure' (>85%). What is the first architectural step to prevent data loss?",
    options: [
      "Increase the refresh_interval of the Elasticsearch indices",
      "Introduce a Kafka or Event Hubs buffer between log producers and Logstash",
      "Delete the 'Warm' nodes to make room for 'Hot' data",
      "Switch from Kibana to Grafana for better visualization"
    ],
    answer: 1,
    explanation: "Using Kafka as a persistent buffer (queue) allows log producers to continue sending data while Logstash/Elasticsearch recovers from the pressure, preventing data loss during spikes.",
    hint: "This pattern is known as 'Queue-based Load Leveling'."
  },
  {
    id: 5,
    difficulty: "medium",
    category: "sre-concepts",
    question: "A Service Level Objective (SLO) is set to 99.9% availability. If the service experiences 45 minutes of downtime in a 30-day window, has the error budget been exceeded?",
    options: [
      "No, the error budget for 99.9% is approximately 43 minutes per month",
      "Yes, the error budget for 99.9% is approximately 43.8 minutes per month",
      "No, the error budget is 60 minutes per month",
      "Yes, 99.9% allows only 5 minutes of downtime"
    ],
    answer: 1,
    explanation: "99.9% availability allows for 0.1% downtime. (0.001 * 30 days * 24 hours * 60 minutes) = 43.2 minutes. 45 minutes exceeds this limit.",
    hint: "Calculate 0.1% of the total minutes in a month."
  },

  /* ======================================================
     DATA ARCHITECTURE (Kafka / MSK)
     ====================================================== */
  {
    id: 6,
    difficulty: "hard",
    category: "data-kafka",
    question: "A Kafka consumer group is falling behind (increasing lag). You notice that only one partition is significantly larger than the others, and scaling up the number of consumers has no effect on that specific lag. What is the likely cause?",
    options: [
      "The broker is down",
      "Data Skew caused by an inefficient partition key (Hot Key)",
      "The 'acks' setting is set to 'all'",
      "The consumers are using the wrong Schema Registry version"
    ],
    answer: 1,
    explanation: "If a single partition is skewed (has most of the data), it can only be processed by one consumer at a time within a group. Scaling consumers won't help because a partition cannot be shared by consumers in the same group.",
    hint: "Look into how partition keys distribute data."
  },

  /* ======================================================
     CI/CD & GITOPS
     ====================================================== */
  {
    id: 7,
    difficulty: "medium",
    category: "cicd-gitops",
    question: "You are implementing ArgoCD for GitOps. A developer manually changes the replica count of a deployment via 'kubectl edit' to fix an urgent issue. If ArgoCD is set to 'Auto-Sync' and 'Self-Heal', what happens next?",
    options: [
      "ArgoCD updates the Git repository to match the cluster",
      "ArgoCD detects the drift and reverts the cluster state to match Git",
      "The cluster remains in the manual state until the next Git commit",
      "ArgoCD sends an alert but takes no action"
    ],
    answer: 1,
    explanation: "Self-healing ensures the cluster matches the 'Source of Truth' (Git). Any manual 'kubectl' changes are treated as drift and automatically reverted.",
    hint: "Git is the absolute source of truth in GitOps."
  },

  /* ======================================================
     INFRASTRUCTURE AS CODE (Terraform / Bicep)
     ====================================================== */
  {
    id: 8,
    difficulty: "hard",
    category: "iac-terraform",
    question: "In a multi-environment Terraform setup, you want to ensure that a production database cannot be accidentally deleted if a developer runs 'terraform destroy'. Which lifecycle block is most critical?",
    options: [
      "ignore_changes",
      "prevent_destroy = true",
      "create_before_destroy",
      "depends_on"
    ],
    answer: 1,
    explanation: "The prevent_destroy meta-argument provides a safety rail that causes Terraform to reject any plan that includes the destruction of that resource.",
    hint: "This is a safety mechanism within the resource block."
  },

  /* ======================================================
     SECURITY & DEVSECOPS
     ====================================================== */
  {
    id: 9,
    difficulty: "medium",
    category: "security-devsecops",
    question: "A security audit reveals that your microservices are passing database credentials via environment variables. Which 'Zero-Secret' architecture should you recommend?",
    options: [
      "Encrypting the environment variables with Base64",
      "Using Workload Identity (AKS) or Pod Identity (EKS) to access a Key Vault",
      "Storing secrets in a private GitHub repository",
      "Hardcoding secrets in a private Docker image"
    ],
    answer: 1,
    explanation: "Workload identities allow the pod to authenticate to cloud services (like Vault/KeyVault) using its own identity, eliminating the need for stored passwords or static keys.",
    hint: "Think about 'Secret-less' authentication."
  },

  /* ======================================================
     COST OPTIMIZATION (FINOPS)
     ====================================================== */
  {
    id: 10,
    difficulty: "medium",
    category: "finops-cost",
    question: "Your AWS bill shows high costs for 'Data Transfer Out'. You notice that your EKS pods in us-east-1a are frequently communicating with an RDS instance in us-east-1b. What architectural change reduces this cost?",
    options: [
      "Switch to a multi-region VPC peering",
      "Enable 'Cross-Zone Load Balancing' on the NLB",
      "Implement 'Topology-Aware Routing' to keep traffic within the same AZ",
      "Use S3 Select to filter data before transmission"
    ],
    answer: 2,
    explanation: "Inter-AZ data transfer is not free. Topology-aware routing (or keeping services in the same AZ where possible) minimizes cross-AZ traffic, reducing latency and costs.",
    hint: "Traffic between AZs costs money in most cloud providers."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: 
const hotsQuestions = [
    2, 3, 5, 
];
