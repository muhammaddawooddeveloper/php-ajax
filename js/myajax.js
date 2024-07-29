$("document").ready(function() {
    // insert
    $("#btnadd").click(function(e){
        e.preventDefault();
        let id = $("#stid").val();
        let name = $("#nameid").val();
        let email = $("#emailid").val();
        let ps = $("#passwordid").val();
        $("#stid").attr("type", "hidden");

        let mydata = {id: id , name: name, email: email, password: ps};
        $.ajax({
            url: "insert.php",
            method:"post",
            data: mydata,
            success: function(data) {
                // console.log(data)
                $("#msg").html(data);
                $("#id").addClass("d-none")
            }
            
        });
        $("#myform")[0].reset();
        $("#stid").val('');
        $("#nameid").focus();
        show_data();

    })

    // rertrive data
    function show_data(){
        let output;
        $.ajax({
            url: "retrive.php",
            method: "get",
            dataType: "json",
            success: function(data){
                // console.log(data[0].Name)
                for (let i=0; i<data.length; i++){
                    // console.log(data[i].Name)
                    output +="<tr><td>"+data[i].Id + "</td><td>" + data[i].Name + "</td><td>" + data[i].Email + "</td><td>" + data[i].Password + "</td><td><button id='btnedit' class='btn btn-primary mx-1' data-sid="+data[i].Id+">Edit</button><button id='btndel' class='btn btn-danger' data-sid="+ data[i].Id +">Delete</button></td></tr>"
                    // console.log(output)

                }
                $("#tbody").html(output);

            }

        });

    }

    show_data();


    // delete

    $("#tbody").on("click", "#btndel" , function(){
        // console.log("delete");
        let id = $(this).attr("data-sid");
        // console.log(id);
        let mydata = {id : id};        
        $.ajax({
            url : "delete.php",
            method : "POST",
            data: mydata,
            success: function(data){
                $("#msg").html(data)
            }

        })
        show_data();
    })

    // edit
    function edit(){
        $("#tbody").on("click", "#btnedit" ,function(e){
            // console.log("edit")
            let id =  $(this).attr("data-sid");
            console.log(id);
           let mydata = {id : id};
           $.ajax({
            url: "edit.php",
            method: "post",
            data: mydata,
            dataType: "json",
            success: function(data){
                // console.log(data);
                x = data;
                console.log(x);
                $("#stid").val(x.Id);
                $("#nameid").val(x.Name);
                $("#emailid").val(x.Email);
                $("#passwordid").val(x.Password);
                $("#stid").attr("type", "text");
                $("#id").removeClass("d-none")
            }
        });
        });

     
    }
    edit();


    // $("#search").on("keyup", function(){
    //     console.log("hello dsd");
    // })
 
})
function myfun(){
    let output;
   let given =  $("#search").val();
   let mydata = {name : given};
   $.ajax({
    url: "search.php",
    method: "POST",
    dataType: "JSON",
    data: mydata,
    success: function(data){
        // console.log(data);
        for (let i=0; i<data.length; i++){
            // console.log(data[i].Name)
            output +="<tr><td>"+data[i].Id + "</td><td>" + data[i].Name + "</td><td>" + data[i].Email + "</td><td>" + data[i].Password + "</td><td><button id='btnedit' class='btn btn-primary mx-1' data-sid="+data[i].Id+">Edit</button><button id='btndel' class='btn btn-danger' data-sid="+ data[i].Id +">Delete</button></td></tr>"
            // console.log(output)

        }
        $("#tbody").html(output);

    }
   })

}

// myfun();