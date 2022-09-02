//  https://api.adviceslip.com/advice

let url= 'https://api.adviceslip.com/advice';

fetch(url)
    .then((Response) => Response.json())
    .then((json) => mostrarData(json))
    .catch(error => console.log(error));



const mostrarData = (json) =>{
    console.log(json);
    let body = ''
    body += 
    `
    <div class=" relative bg-gray-700 px-10 py-5 rounded-lg sm:max-w-md text-center max-w-xs">
    <h1 class="text-green-500 uppercase text-[28px] font-semibold text-center pb-2">Advice # ${json.slip.id}</h1>
    <h1 class="text-[28px] font-bold text-gray-400 pb-4">
      ${json.slip.advice}
    </h1>
    <div class="sm:text-gray-400 sm:font-bold sm:grid sm:place-items-center hidden">
      <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

    </div>
  </div>
    
    `
    document.getElementById('body').innerHTML = body;
}
