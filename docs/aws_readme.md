# ☁️ AWS Cloud Interview & Architecture README

### 📘 Quick Reference (Decoupling + Scalability + "Well-Architected")

```text
IAM User/Role → Policy → VPC → Subnet → Security Group → Instance
```

## ⚙️ 1. Infrastructure & Networking
* **VPC (Virtual Private Cloud):** Your private network slice. Use **Public Subnets** for Load Balancers and **Private Subnets** for Databases.
* **Direct Connect:** Dedicated physical link from on-prem to AWS for low latency and high bandwidth.

## 🔐 2. Security & Compliance
* **IAM Roles:** Use roles for EC2/Lambda instead of IAM Users to avoid long-lived credentials.
* **Service Control Policies (SCPs):** Set the maximum permissions for accounts within an AWS Organization.
* **KMS (Key Management Service):** Centralized encryption key management.

## ⚡ 3. Compute & Integration
* **Lambda:** Serverless compute; watch out for **Cold Starts** (mitigate with Provisioned Concurrency).
* **ECS vs. EKS:** ECS is AWS-native/simpler; EKS is standard Kubernetes for multi-cloud portability.
* **Event-Driven:** SQS (Queueing), SNS (Pub/Sub), and EventBridge (Event Bus) for decoupling microservices.

## 🚨 4. AWS Failure Scenarios
* **Symptom: "Connection Timeout" to EC2:** Usually a **Security Group** (Stateful) or **NACL** (Stateless) misconfiguration.
* **Symptom: Lambda Timeout:** Downstream DB is slow or VPC ENI creation overhead. **Fix:** Optimize DB queries or use RDS Proxy.
### 📎 Clipboard Sections (Quick Preparation)

#### **AWS Buzzwords**
```markdown
- IAM Roles → Temporal security for services (No hardcoded keys)
- VPC Peering / Transit Gateway → Multi-VPC networking
- S3 Select → Querying CSV/JSON inside S3 without downloading files
- Aurora Serverless → Auto-scaling SQL database
- CloudFormation / CDK → AWS native Infrastructure as Code (IaC)
```

#### **Failure Debugging**
```markdown
- Regional Outage → Implement Multi-Region Failover (Traffic Manager / Route 53)
- Cost Spikes → Use Cost Management/Budgets + Tagging enforcement
- Security Breach → Rotate keys, check CloudTrail/Activity Logs, isolate resources
```

---

### 💻 Code Snippet: Identity Logic (The Tech Lead Standard)

**AWS IAM Policy (Least Privilege)**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::my-secure-bucket/*",
      "Condition": { "IpAddress": { "aws:SourceIp": "203.0.113.0/24" } }
    }
  ]
}
```
