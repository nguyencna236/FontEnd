           
//         //    thêm khóa học thủ công bằng posman

// // var listCoursesBlock = 
// //     document.querySelector('#list-courses')
// var courseApi = 'http://localhost:3000/courses'

// function start(){
//     getCourses(renderCourses)
// }
// start()

// function getCourses(callback){
//     fetch(courseApi)
//         .then(function(response){
//             return response.json();
//         })
//         .then(callback)
// }
// function renderCourses(courses){
//     var listCoursesBlock =
//         document.querySelector('#list-courses')
//     var htmls = courses.map(function(course){
//         return `
//             <li>
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//             </li>
//         `
//     })
//     listCoursesBlock.innerHTML = htmls.join('')
// }


//     //Thêm khóa học trực tiếp trên web bằng input

// var courseApi = 'http://localhost:3000/courses'
// function start(){
//     getCourses(renderCourses)
//     handleCreateForm()
// }
// start()

// function getCourses(callback){
//     fetch(courseApi)
//         .then(function(response){
//             return response.json();
//         })
//         .then(callback)
// }
// function createCourse(data, callback){
//     var options = {
//         method: 'POST',
//         headers: {
//              'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     }
//     fetch(courseApi,options)
//         .then(function(response){
//             response.json();
//         })
//         .then(callback)
// }
// function handleCreateForm(){
//     createBtn = document.querySelector('#create')
//     createBtn.onclick = function(){
//         var name = 
//             document.querySelector('input[name="name"]').value;
//         var description = 
//             document.querySelector('input[name="description"]').value;       
//         var formData = {
//             name: name,
//             description: description
//         }
//         createCourse(formData, function(){
//             getCourses(renderCourses)
//         })
//     }
// }

// function handleDeleteCourse(id){
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }
//     fetch(courseApi+'/'+id,options)
//         .then(function(response){
//             response.json();
//         })
//         .then(function(){
//         var courseItem = document.querySelector('.course-item-'+id)
//             if(courseItem){
//                 courseItem.remove()
//             }
//         })
// }

// function renderCourses(courses){
//     var listCoursesBlock =
//         document.querySelector('#list-courses')
//     var htmls = courses.map(function(course){
//         return `
//             <li class="course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick=
//                     "handleDeleteCourse(${course.id})">&times;
//                 </button>
//             </li>
//         `
//     })
//     listCoursesBlock.innerHTML = htmls.join('')
// }


                // làm lại
var api = 'http://localhost:3000/course'

function start(){
    takeData(handleRenderCourse)
    createForm()
}
start()

function takeData(data){
    fetch(api)
        .then(function(loadData){
            return loadData.json()
        })
        .then(data)
}
function sendData(newdata,data){
    var postData = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(newdata)
    }
    fetch(api,postData)
        .then(function(loadData){
            return loadData.json()
        })
        .then(data)
}
function fixData(newData,id){
    var patchData = {
        method: 'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(newData)
    }
    fetch(api+'/'+id,patchData)
        .then(function(loadData){
            return loadData.json()
        })
        .then(takeData(handleRenderCourse))
}
function handleFix(id){
    document.querySelector('input[name="name"]').value =
         document.querySelector('.h4-'+id).innerHTML
    document.querySelector('input[name="description"]').value =
         document.querySelector('.p-'+id).innerHTML

    luuBtn = document.querySelector('#fix');
    document.querySelector('#fix').style.display = "block"
    document.querySelector('#create').style.display = "none"

    luuBtn.onclick = function(){
    form = { 
        name: 
            document.querySelector('input[name="name"]').value,
        description: 
            document.querySelector('input[name="description"]').value
    }
    fixData(form,id)
    } 
}
function handleDelete(co_id){
    deleteData = {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'}
    }
    fetch(api+'/'+co_id,deleteData)
        .then(function(loadData){
            return loadData.json()
        })
        .then(function(){
            noNull = document.querySelector('.item-'+co_id)
            if(noNull){
                noNull.remove()
            }
        })
}
function createForm(){
    createBtn = document.querySelector('#create')
    createBtn.onclick = function(){
    form = { 
        name: 
            document.querySelector('input[name="name"]').value,
        description: 
            document.querySelector('input[name="description"]').value
    }
    sendData(form,takeData(handleRenderCourse))
    }
}
function handleRenderCourse(data){
    document.querySelector('#fix').style.display = "none"
    document.querySelector('#create').style.display = "block"

    htmlCourses = data.map(function(course){
        return `<li class="item-${course.id}">
                    <h4 class="h4-${course.id}">${course.name}</h4>
                    <p class="p-${course.id}">${course.description}</p>
                    <button onclick=
                    "handleDelete(${course.id})">&times;
                    </button>
                    <button onclick="handleFix(${course.id})">
                        sữa
                    </button>
                </li>`
        }
    )
    document.querySelector('.cana').innerHTML = htmlCourses.join('')
    document.querySelector('input[name="description"]').value = ''
    document.querySelector('input[name="name"]').value = ''
}


