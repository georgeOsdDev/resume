<p align="center">
  <a href="https://blog.toshida.org">
    blog.toshida.org
  </a>
</p>
<h1 align="center">
  Minimal Blog @ Azure Static Web Apps
</h1>

<p align="center">
  <a href="https://github.com/georgeOsdDev/resume/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-0BSD-blue.svg" alt="Minimal Blog is released under the 0BSD license." />
  </a>
  <a href="https://github.com/georgeOsdDev/resume/actions/workflows/azure-static-web-apps-wonderful-island-0534aa210.yml">
    <img src="https://github.com/georgeOsdDev/resume/actions/workflows/azure-static-web-apps-wonderful-island-0534aa210.yml/badge.svg?branch=main" alt="Azure Static Web Apps CI/CD" />
  </a>
    <a href="https://github.com/georgeOsdDev/resume/actions/workflows/Node.yml">
    <img src="https://github.com/georgeOsdDev/resume/actions/workflows/Node.yml/badge.svg?branch=main" alt="Node.js CI" />
  </a>
</p>

This repository is [Gatsby](https://www.gatsbyjs.com/) project using [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog) theme.

Generated files will be hosted on [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)

![Diagram](https://raw.githubusercontent.com/georgeOsdDev/resume/main/content/pages/about/diagram.png)

### ⚡ Architecture

- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) for static file hosting.
  - [Azure Functions](https://docs.microsoft.com/en-us/azure/static-web-apps/add-api) for access counter api.
  - [Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitoring) for monitor function.
  - [Custom Domain](https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain) using [App Service Domains](https://docs.microsoft.com/en-us/azure/app-service/manage-custom-dns-buy-domain) and [Azure DNS](https://azure.microsoft.com/en-us/services/dns/).
- [Azure SQL Database](https://azure.microsoft.com/en-us/products/azure-sql/database/) with [Sequence Numbers](https://docs.microsoft.com/en-us/sql/relational-databases/sequence-numbers/sequence-numbers?view=sql-server-ver15) for data storage.

### 🚀 Development

- VS Code and [Azure Static Web Apps (Preview) extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps) as editor.
- [GitHub Actions](https://github.com/georgeOsdDev/resume/actions) for CI/CD.
- [Gatsby](https://www.gatsbyjs.com/) and [@lekoarts/gatsby-theme-minimal-blog](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog) theme for site template.
- [Jest](https://jestjs.io/) for testing.
- [Pretitter](https://prettier.io/) for linting.
- [MDX](https://mdxjs.com/) for writing content.
