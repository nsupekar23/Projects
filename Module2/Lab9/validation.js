      function validate1()
         {
		    var Graduation = document.getElementsByName("graduation");
			if(Graduation[0].checked==true)
			{
				var qual1 = window.document.registerform.qualifi;
				var qualArr1 = new Array("BSC","BCA","BBA","BE");
				for(let i=0;i<qualArr1.length;i++)
				{
					qual1.options[i] = new Option(qualArr1[i],	qualArr1[i]);
				}
			}
		}
	function validate2()
		{
		    var Graduation = document.getElementsByName("graduation");	
			if(Graduation[1].checked==true)
			{
				var qual = window.document.registerform.qualifi;
				var qualArr = new Array("MSC","MCA","MBA","ME");
				for(let i=0;i<qualArr.length;i++)
					{
						qual.options[i] = new Option(qualArr[i],	qualArr[i]);
					}
			}			
		}
	function details()
	{
	  var graduate;
				var a = document.getElementsByName('graduation');
				if (a[0].checked == true){
					graduate="UG";
				}else{
				graduate="PG";
				}				
				var graduation= document.getElementById("graduatn").value;
				var fname = window.document.registerform.fname.value;
				var phone =  window.document.registerform.phone.value;
				var DOB = window.document.registerform.DOB.value;
				var email = window.document.registerform.email.value;
		
				var val ;
				
				var d1 = new Date();
				var d2 = eval(DOB.substring(6,10));
				var age = d1.getFullYear() - d2;
				var cgwinobj = window.open("","cgwindow","width=400,height=300");
			cgwinobj.document.write("<body bgcolor='skyblue'>");
			cgwinobj.document.write("<h2>Name : "+fname); 
			cgwinobj.document.write("<h2>Age : "+age);  
			cgwinobj.document.write("<h2>Phone : "+phone);  
			cgwinobj.document.write("<h2>Email : "+email);  
			cgwinobj.document.write("<h2>graduate : "+graduate);  
			cgwinobj.document.write("<h2>graduatation level : "+graduation);  
			cgwinobj.document.write("</body>");  
	
	
	
	
	}