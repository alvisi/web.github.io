function Input(){
	var a = document.forms['Organisasi']['firstname'].value;
	var b = document.forms['Organisasi']['lastname'].value;
	var c = document.forms['Organisasi']['NIM'].value;
	var d = document.forms['Organisasi']['Jurusan'].value;
	var e = document.forms['Organisasi']['Tahun Angkatan'].value;
	var f = document.forms['Organisasi']['Ormawa'].value;
	var g = document.forms['Organisasi']['Divisi'].value;
	var h = document.forms['Organisasi']['gender'].value;
	var i = document.forms['Organisasi']['Motto'].value;
	var j = document.forms['Organisasi']['Alasan'].value;
	var k = document.forms['Organisasi']['Instagram'].value;
	var l = document.forms['Organisasi']['Facebook'].value;
	var m = document.forms['Organisasi']['Twitter'].value;


	var table = document.getElementById('Input');
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
	var cell12 = row.insertCell(11);
	var cell13 = row.insertCell(12);


	cell1.innerHTML = a;
	cell2.innerHTML = b;
	cell3.innerHTML = c;
	cell4.innerHTML = d;
	cell5.innerHTML = e;
	cell6.innerHTML = f;
	cell7.innerHTML = g;
	cell8.innerHTML = h;
	cell9.innerHTML = i;
	cell10.innerHTML = j;
	cell11.innerHTML = k;
	cell12.innerHTML = l;
	cell13.innerHTML = m;

	alert("Data berhasil disimpan");
}