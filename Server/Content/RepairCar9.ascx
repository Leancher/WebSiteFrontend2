﻿<%@ Control Language="VB" AutoEventWireup="false" CodeFile="RepairCar9.ascx.vb" Inherits="Content_RepairCar09" %>

<br />
<br />
В переделанной схеме габариты и фары включаются при включении зажигания. 
Подрудевой выключатель включает только реле, а уже контакты реле включают лампочки.
<br />
<br />
Для переделки нужно снять блок предохранителей. Провод, идущий от катушки реле К9 к плюсу питания, отключить и подключить к минусу.
<br />
Черный провод, идущий на землю подрулевого переключателя отключить от земли и подключить к "плюсу" замка зажигания.
<br />
<%
    Response.Write("<img src='../" + Config.ContentPhotoFolder + "/RepairCar09-01.jpg' />")
%>
<br />
Для переделки фар нужно подключить взять два новых реле для дальнего и ближнего света. 
<br />
Устанавливаем реле под капотом около фар. Контакты реле подключить напрямую к аккумулятору. 
<br />
Далее снимаем блок предохранителей и отключаем провода, идущие в салон и подключаем к контактной группе реле. 
<br />
Получается, что фары подключены сразу к аккумулятору.
Обмотки реле подключаем к подрулевому переключателю, используя штатные провода, отключенные от блока предохранителей. 
<br />
Далее провод, идущий от катушки реле К8 к плюсу питания, отключить и подключить к минусу.
<br />
<%
    Response.Write("<img src='../" + Config.ContentPhotoFolder + "/RepairCar09-02.jpg' />")
%>
<br />