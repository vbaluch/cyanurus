import React from "react";
import { Helmet } from "react-helmet";

export function NewsletterForm() {
  return (
    <>
      <Helmet
        script={[
          {
            type: "text/javascript",
            innerHTML: `(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
                        var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
                        f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
                        var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
                        _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
                        
                        var ml_account = ml('accounts', '1988148', 'h1o2u6k2n4', 'load');`,
          },
        ]}
      />
      <div
        className="ml-form-embed"
        data-account="1988148:h1o2u6k2n4"
        data-form="2128732:y2q8o2"
      ></div>
    </>
  );
}
