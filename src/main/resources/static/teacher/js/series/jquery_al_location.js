$(function(){
		var $tbody = $("#myTable01 > tbody");
		var str = window.opener.document.getElementById("libLocal").value;
		if(str != ''){
			$tbody.html('');
			var strs = str.split(";"); 
			for(var i = 0; i<strs.length; i++){
				var strChildren = strs[i];
				if(strChildren == ''){
					continue;
				}
				var strChildrens = strChildren.split(":");
				var copies = strChildrens[0];
				var collectionPlace = strChildrens[1];
				var bookCirculateType = strChildrens[2];
				//<c:set var="collectionPlace" value="'+collectionPlace+'"></c:set><c:set var="bookCirculateType" value="'+bookCirculateType+'"></c:set>
				var rowInfo = '<tr><td><input name="checks" type="radio" class="input_none" id="checks" value="${i}" /></td>';
				rowInfo = rowInfo+'<td><input value="'+copies+'" type="text" name="copies" ></input></td><td><select name="collectionPlace" id="collectionPlace"><c:forEach items="${collectionPlaces}" var="i"><option value="${i.id}">${i.codeAndName}</option></c:forEach></select></td>';
				rowInfo = rowInfo+'<td><select name="bookCirculateType" id="bookCirculateType"><c:forEach items="${bookCirculateTypes}" var="i"><option value="${i.id}">${i.codeAndName}</option></c:forEach></select></td></tr>';
				$tbody.append(rowInfo);
				//id是唯一标识；id是不能相同的，不然的话违反了html规则
				$("select[name='collectionPlace']").last().find("option[value='"+collectionPlace+"']").attr("selected",true);
				$("select[name='bookCirculateType']").last().find("option[value='"+bookCirculateType+"']").attr("selected",true);
				//alert($("input[name='copies']").last().val());
				
			}
		}
	}); 
	//添加新的一行
	function addRow_Empty(){
		var rowInfo = '<tr><td><input name="checks" type="radio" class="input_none" id="checks" value="${i}" /></td>';
		rowInfo = rowInfo+'<td><input type="text" name="copies"></input></td><td><select name="collectionPlace" id="collectionPlace"><c:forEach items="${collectionPlaces}" var="i"><option value="${i.id}">${i.codeAndName}</option></c:forEach></select></td>';
		rowInfo = rowInfo+'<td><select name="bookCirculateType" id="bookCirculateType"><c:forEach items="${bookCirculateTypes}" var="i"><option value="${i.id}">${i.codeAndName}</option></c:forEach></select></td></tr>';
		var $tbody = $("#myTable01 > tbody");
		$tbody.append(rowInfo);
	}
	//删除一行
	function deleteRow(){
		$("input:checked").parent().parent().remove();
	}
	//关闭窗口
	function doCancel(){
		window.close();
	}
	//保存并且关闭窗口
	function doOK(){
		var str = "";
		var isNumber = true;
		var sumCopies = new Number(0);;
		$("input[name='copies']").each(function(i){
			var thisVal = $(this).val();
			if(!checkNumber(thisVal)){
				isNumber = false;
				alert("请输入有效册数");
				return false;
			}
			
			if(thisVal != ''){
				sumCopies = sumCopies+new Number(thisVal);
				var collectionPlace = $(this).parent().next().first().find("select").find("option:selected").val();
				var	bookCirculateType = $(this).parent().next().first().next().first().find("select").find("option:selected").val();
				str = str+thisVal+":"+collectionPlace+":"+bookCirculateType+";"
			}
		 });
		if(!isNumber){
			return ;
		}
		if(sumCopies > 0){
			window.opener.document.getElementById("copies").value = sumCopies;
		}
		window.opener.document.getElementById("libLocal").value = str;
		window.close();
	}