var fc_CSS=document.createElement('link');
fc_CSS.setAttribute('rel','stylesheet');
var fc_isSecured = (window.location && window.location.protocol == 'https:');
var fc_lang = document.getElementsByTagName('html')[0].getAttribute('lang');
var fc_rtlLanguages = ['ar','he'];
var fc_rtlSuffix = (fc_rtlLanguages.indexOf(fc_lang) >= 0) ? '-rtl' : '';
fc_CSS.setAttribute('type','text/css');
fc_CSS.setAttribute('href',((fc_isSecured)? 'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets1.chat.freshdesk.com')+'/css/visitor'+fc_rtlSuffix+'.css');
document.getElementsByTagName('head')[0].appendChild(fc_CSS);
var fc_JS=document.createElement('script');
fc_JS.type='text/javascript';
fc_JS.defer=true;
fc_JS.src=((fc_isSecured)?'https://d36mpcpuzc4ztk.cloudfront.net':'http://assets.chat.freshdesk.com')+'/js/visitor.js';
(document.body?document.body:document.getElementsByTagName('head')[0]).appendChild(fc_JS);
window.livechat_setting= 'eyJ3aWRnZXRfc2l0ZV91cmwiOiJhaW9wZXJhdGlvbi5mcmVzaGRlc2suY29tIiwicHJvZHVjdF9pZCI6bnVsbCwibmFtZSI6Ik9wZXJhdGlvbiBjdXN0b21lciBzdXBwb3J0Iiwid2lkZ2V0X2V4dGVybmFsX2lkIjpudWxsLCJ3aWRnZXRfaWQiOiIwOTczNjdiNi0yZGU2LTRkMjUtYjMxZC1iMGU3ZThlMTQxNjciLCJzaG93X29uX3BvcnRhbCI6ZmFsc2UsInBvcnRhbF9sb2dpbl9yZXF1aXJlZCI6ZmFsc2UsImxhbmd1YWdlIjpudWxsLCJ0aW1lem9uZSI6bnVsbCwiaWQiOjYwMDAwNDI0NjMsIm1haW5fd2lkZ2V0IjoxLCJmY19pZCI6ImU3NWI2MTNkOWFmMDY0YTY2NDgzNzY2NTQ4OTQxMDgxIiwic2hvdyI6MSwicmVxdWlyZWQiOjIsImhlbHBkZXNrbmFtZSI6IlN1cHBvcnQgUG9ydGFsIiwibmFtZV9sYWJlbCI6Ik5hbWUiLCJtZXNzYWdlX2xhYmVsIjoiTWVzc2FnZSIsInBob25lX2xhYmVsIjoiUGhvbmUiLCJ0ZXh0ZmllbGRfbGFiZWwiOiJUZXh0ZmllbGQiLCJkcm9wZG93bl9sYWJlbCI6IkRyb3Bkb3duIiwid2VidXJsIjoiYWlvcGVyYXRpb24uZnJlc2hkZXNrLmNvbSIsIm5vZGV1cmwiOiJjaGF0LmZyZXNoZGVzay5jb20iLCJkZWJ1ZyI6MSwibWUiOiJNZSIsImV4cGlyeSI6MCwiZW52aXJvbm1lbnQiOiJwcm9kdWN0aW9uIiwiZW5kX2NoYXRfdGhhbmtfbXNnIjoiVGhhbmsgeW91ISEhIiwiZW5kX2NoYXRfZW5kX3RpdGxlIjoiRW5kIiwiZW5kX2NoYXRfY2FuY2VsX3RpdGxlIjoiQ2FuY2VsIiwic2l0ZV9pZCI6ImU3NWI2MTNkOWFmMDY0YTY2NDgzNzY2NTQ4OTQxMDgxIiwiYWN0aXZlIjoxLCJyb3V0aW5nIjp7ImNob2ljZXMiOnsiSXNzdWUgd2l0aCBNeSBhY2Nlc3MiOlsiMCJdLCJJc3N1ZSB3aXRoIHVuZGVyc3RhbmRpbmcgdGhlIGNvdXJzZSI6WyIwIl0sIklzc3VlIHdpdGggbXkgcXVpeiI6WyIwIl0sImRlZmF1bHQiOlsiNjAwMDIwMTc0MCJdfSwiZHJvcGRvd25fYmFzZWQiOiJmYWxzZSJ9LCJwcmVjaGF0X2Zvcm0iOjEsImJ1c2luZXNzX2NhbGVuZGFyIjp7ImJ1c2luZXNzX3RpbWVfZGF0YSI6eyJ3ZWVrZGF5cyI6WzEsMiwzLDQsNSw2XSwid29ya2luZ19ob3VycyI6eyIxIjp7ImJlZ2lubmluZ19vZl93b3JrZGF5IjoiNjozMCBhbSIsImVuZF9vZl93b3JrZGF5IjoiMTE6NTk6NTkgcG0ifSwiMiI6eyJiZWdpbm5pbmdfb2Zfd29ya2RheSI6IjEyOjAwIGFtIiwiZW5kX29mX3dvcmtkYXkiOiIxMTo1OTo1OSBwbSJ9LCIzIjp7ImJlZ2lubmluZ19vZl93b3JrZGF5IjoiMTI6MDAgYW0iLCJlbmRfb2Zfd29ya2RheSI6IjExOjU5OjU5IHBtIn0sIjQiOnsiYmVnaW5uaW5nX29mX3dvcmtkYXkiOiIxMjowMCBhbSIsImVuZF9vZl93b3JrZGF5IjoiMTE6NTk6NTkgcG0ifSwiNSI6eyJiZWdpbm5pbmdfb2Zfd29ya2RheSI6IjEyOjAwIGFtIiwiZW5kX29mX3dvcmtkYXkiOiIxMTo1OTo1OSBwbSJ9LCI2Ijp7ImJlZ2lubmluZ19vZl93b3JrZGF5IjoiMTI6MDAgYW0iLCJlbmRfb2Zfd29ya2RheSI6Ijg6MDAgYW0ifX0sImZ1bGx3ZWVrIjpmYWxzZX0sImhvbGlkYXlfZGF0YSI6W10sInRpbWVfem9uZSI6IkhvbmcgS29uZyJ9LCJwcm9hY3RpdmVfY2hhdCI6MCwicHJvYWN0aXZlX3RpbWUiOjE1LCJzaXRlX3VybCI6ImFpb3BlcmF0aW9uLmZyZXNoZGVzay5jb20iLCJleHRlcm5hbF9pZCI6bnVsbCwiZGVsZXRlZCI6MCwibW9iaWxlIjoxLCJhY2NvdW50X2lkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAxNS0xMi0xMVQwODozNDo0OC4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMTctMDMtMjhUMDI6NTM6NTcuMDAwWiIsImNiRGVmYXVsdE1lc3NhZ2VzIjp7ImNvYnJvd3Npbmdfc3RhcnRfbXNnIjoiWW91ciBzY3JlZW5zaGFyZSBzZXNzaW9uIGhhcyBzdGFydGVkIiwiY29icm93c2luZ19zdG9wX21zZyI6IllvdXIgc2NyZWVuc2hhcmluZyBzZXNzaW9uIGhhcyBlbmRlZCIsImNvYnJvd3NpbmdfZGVueV9tc2ciOiJZb3VyIHJlcXVlc3Qgd2FzIGRlY2xpbmVkIiwiY29icm93c2luZ19hZ2VudF9idXN5IjoiQWdlbnQgaXMgaW4gc2NyZWVuIHNoYXJlIHNlc3Npb24gd2l0aCBjdXN0b21lciIsImNvYnJvd3Npbmdfdmlld2luZ19zY3JlZW4iOiJZb3UgYXJlIHZpZXdpbmcgdGhlIHZpc2l0b3LigJlzIHNjcmVlbiAiLCJjb2Jyb3dzaW5nX2NvbnRyb2xsaW5nX3NjcmVlbiI6IllvdSBoYXZlIGFjY2VzcyB0byB2aXNpdG9y4oCZcyBzY3JlZW4gIiwiY29icm93c2luZ19yZXF1ZXN0X2NvbnRyb2wiOiJSZXF1ZXN0IHZpc2l0b3IgZm9yIHNjcmVlbiBhY2Nlc3MgIiwiY29icm93c2luZ19naXZlX3Zpc2l0b3JfY29udHJvbCI6IkdpdmUgYWNjZXNzIGJhY2sgdG8gdmlzaXRvciAiLCJjb2Jyb3dzaW5nX3N0b3BfcmVxdWVzdCI6IkVuZCB5b3VyIHNjcmVlbnNoYXJpbmcgc2Vzc2lvbiIsImNvYnJvd3NpbmdfcmVxdWVzdF9jb250cm9sX3JlamVjdGVkIjoiWW91ciByZXF1ZXN0IHdhcyBkZWNsaW5lZCIsImNvYnJvd3NpbmdfY2FuY2VsX3Zpc2l0b3JfbXNnIjoiU2NyZWVuc2hhcmluZyBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUiLCJjb2Jyb3dzaW5nX2FnZW50X3JlcXVlc3RfY29udHJvbCI6IkFnZW50IGlzIHJlcXVlc3RpbmcgYWNjZXNzIHRvIHlvdXIgc2NyZWVuIiwiY2Jfdmlld2luZ19zY3JlZW5fdmkiOiJBZ2VudCBjYW4gdmlldyB5b3VyIHNjcmVlbiAiLCJjYl9jb250cm9sbGluZ19zY3JlZW5fdmkiOiJBZ2VudCBoYXMgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICIsImNiX3ZpZXdfbW9kZV9zdWJ0ZXh0IjoiWW91ciBhY2Nlc3MgdG8gdGhlIHNjcmVlbiBoYXMgYmVlbiB3aXRoZHJhd24gIiwiY2JfZ2l2ZV9jb250cm9sX3ZpIjoiQWxsb3cgYWdlbnQgdG8gYWNjZXNzIHlvdXIgc2NyZWVuICIsImNiX3Zpc2l0b3Jfc2Vzc2lvbl9yZXF1ZXN0IjoiQWdlbnQgc2Vla3MgYWNjZXNzIHRvIHlvdXIgc2NyZWVuICJ9fQ==';

// Preloading name and email if we have it
$(window).load(function(){
	email = getCookie("email");
	$("#lc_chat_email").val(email);
	marketo = getCookie("marketo");
	if(typeof(marketo) != "undefined") {
		marketo = JSON.parse(marketo);
		$("#lc_chat_name").val(marketo[0].FirstName);
	}
});