<!-- PROJECT LOGO -->  
<br />  
<div align="center">  
<a href="[/assets/3.png](/assets/3.png)">  
<img src="" alt="Logo" width="80" height="80">  
</a>  
  
<h3 align="center">SINKSYS</h3>  
  
<p align="center">  
This repository will explore using Tailwind CSS in creating login forms and tabulating data.  
<br />  
<br />  
<a href="[https://justcallmezaaii.github.io/sinkssys/](https://justcallmezaaii.github.io/sinkssys/)">View Demo</a>  
</p>  
</div>  

<!-- ABOUT THE PROJECT -->  
## About The Project  
    
This repository will explore using Tailwind CSS in creating login forms and tabulating data.  
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>  
  
  
<!-- GETTING STARTED -->  
## Instructions  
  
Simply clone the repository, create your own branch: `git branch dev-<name>`, and start coding!  
  
### Prerequisites  
  
Install Tailwind CSS  
* npm  
```sh  
npm install -D tailwindcss  
npx tailwindcss init  
```  
### Installation  
  
1. Install tailwindcss via npm, and create your tailwind.config.js file.  
```sh  
npm install -D tailwindcss  
npx tailwindcss init  
```  
2. Configure your template paths: Add the paths to all of your template files in your tailwind.config.js file.  
```js  
/** @type {import('tailwindcss').Config} */  
module.exports = {  
content: ["./src/**/*.{html,js}"],  
theme: {  
extend: {},  
},  
plugins: [],  
}  
```  
3. Add the Tailwind directives to your CSS: Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.  
```sh  
@tailwind base;  
@tailwind components;  
@tailwind utilities;  
```  
4. Start the Tailwind CLI build process: Run the CLI tool to scan your template files for classes and build your CSS.  
```sh  
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch  
```  
5. Start using Tailwind in your HTML: Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.  
```html  
<!doctype html>  
<html>  
<head>  
<meta charset="UTF-8">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
<link href="./output.css" rel="stylesheet">  
</head>  
<body>  
<h1 class="text-3xl font-bold underline">  
Hello world!  
</h1>  
</body>  
</html>
```  
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>  
  
  
### Top contributors:  
  
<a href="[https://github.com/justcallmezaaii/sinkssys/graphs/contributors](https://github.com/justcallmezaaii/sinkssys/graphs/contributors)">  
<img src="[https://contrib.rocks/image?repo=justcallmezaaii/sinkssys](https://contrib.rocks/image?repo=justcallmezaaii/sinkssys)" alt="[contrib.rocks](http://contrib.rocks/) image" />  
</a>  
  
  
<!-- CONTACT -->  
## Contact  
  
Zairen V. Lapid - zvl0248@students.uc-bcf.edu.ph  
  
Project Link: [[https://github.com/justcallmezaaii/sinkssys](https://github.com/justcallmezaaii/sinkssys)]
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>
