<script type="text/javascript" charset="utf-8">
  Handlebars.registerHelper('sy_date', function(date_string, style) {
    var date = date_string.replace(/\-/g, '/')
        date = Date.parse(date)
          if (!isNaN(date)){
            var ary = new Date(date).toDateString().split(' ');
            //console.log(ary)
            if(style === 'day'){
              return ary[2]
                }else if(style === 'month'){
                  return ary[1]
                    }else if(style === 'year'){
                      return ary[3]
                        }else{
                          ary.shift();
                          return ary.join(' ');
                        }
          }
    return date_string;
  });

Handlebars.registerHelper('ifEql', function(v1, v2, options) {
  var condition = (v1 === v2);
  if(condition){  
    return options.fn(this);
  }else{
    return options.inverse(this);
  }
});


</script>
  
  
  
  <script id="group_events_tpl" type="text/x-handlebars-template">
    {{#if itemCount}}
      <div class="fromsy ">
        <div class="sy-events">
          
          {{#each items}}
            <div class="sy-event ">
              
              {{#if calendar.title}}
                <div class="sy-title"><span>{{calendar.title}}</span></div>
                  {{/if}}
                   
                   {{#ifEql calendar.start_date calendar.end_date}} 
                     
                     
                     
                     {{#if calendar.start_date}} 

<div class="sy-startdate">
  <span class="sy-heading">Event Date : </span>{{sy_date calendar.start_date}}
    <span class="sy-day">&nbsp;</span>
      <span class="sy-month">&nbsp;</span>
        <span class="sy-year">&nbsp;</span>
          </div>
          {{/if}}
            
            {{else}} 
             
             {{#if calendar.start_date}} 
             <div class="sy-startdate">
               <span class="sy-heading">Start Date : </span>{{sy_date calendar.start_date}}
                 <span class="sy-day">&nbsp;</span>
                   <span class="sy-month">&nbsp;</span>
                     <span class="sy-year">&nbsp;</span>
                       </div>
                       {{/if}}            
                         
                         {{#if calendar.end_date}}  
                         <div class="sy-enddate">
                           <span class="sy-heading">End Date : </span>{{sy_date calendar.end_date}}
                             <span class="sy-day">&nbsp;</span>
                               <span class="sy-month">&nbsp;</span>
                                 <span class="sy-year">&nbsp;</span>
                                   </div>
                                   {{/if}}                       
                                     
                                     
                                     
                                     
                                     
                                     {{/ifEql}}                                              
                                       <div class="sy-data">
                                         
                                         {{#if calendar.description}}
                                      <div class="sy-detail">
                                        {{{calendar.description}}} 
                                    </div>
                                      {{/if}}   
                                        
                                        {{#if calendar.has_downloads}}
                                        <div class="sy-attachment">
                                          <a href="{{../../syurl}}/publik/download/{{calendar.id}}" target="_blank">Click here to download</a>
                                            </div>  
                                            {{/if}} 
                                              
                                              {{#if calendar.location}}
                                              <div class="sy-Location">
                                                <span class="sy-heading">Location :</span> {{calendar.location}}
                                                  </div> 
                                                  {{/if}}
                                                    
                                                    </div>
                                                    
                                                    </div>  
                                                    {{/each}}
                                                      
                                                      </div> 
                                                      </div>    
                                                      {{else}}
                                                       <p class="no-data"><span>No Events</span></p>
                                                         {{/if}}
                                                          </script>
                                                          <!-- ---------------------------------------------- -->
                                                          <script id="group_announcements_tpl" type="text/x-handlebars-template">  
                                                          
                                                          {{#if itemCount}}
                                                      <div class="fromsy ">
                                                        <div class="sy-events">
                                                          
                                                          {{#each items}}
                                                     
                                                     {{#if announcement.title}}                                                   
                                                     <div class="sy-title"><span>{{announcement.title}}</span></div>                                           
                                                       {{/if}}
                                                        <!--
                                                        {{#if announcement.created_at}}
                                                   <div class="sy-startdate">
                                                     <span class="sy-heading">Start Date :</span>{{sy_date announcement.created_at}}
                                                       <span class="sy-day">&nbsp;</span>
                                                         <span class="sy-month">&nbsp;</span>
                                                           <span class="sy-year">&nbsp;</span>
                                                             </div>
                                                             
                                                             {{/if}}
                                                               {{#if announcement.expiration}}      
                                                               <div class="sy-enddate">
                                                                 <span class="sy-heading">End Date :</span>{{sy_date announcement.expiration}}
                                                                   <span class="sy-day">&nbsp;</span>
                                                                     <span class="sy-month">&nbsp;</span>
                                                                       <span class="sy-year">&nbsp;</span>
                                                                         </div>
                                                                         {{/if}}   -->   
                                                                           <div class="sy-data">
                                                                             
                                                                             {{#if announcement.content}}
                                                                          <div class="sy-detail">
                                                                            {{{announcement.content}}}
                                                              </div>
                                                                {{/if}}
                                                                  
                                                                  {{#if announcement.has_downloads}}
                                                                  <div class="sy-attachment">
                                                                    <a href="{{../../syurl}}/publik/download/{{announcement.id}}" target="_blank">
                                                                      Click here to download
                                                                        </a>
                                                                        </div>  
                                                                        {{/if}}  
                                                                          
                                                                          </div>  
                                                                          
                                                                          {{/each}}
                                                                            
                                                                            </div>
                                                                            </div>  
                                                                            {{else}}
                                                                             <p class="no-data"><span>No Announcement</span></p>
                                                                               {{/if}}  
                                                                                
                                                                                </script>            
                                                                                
                                                                                <!-- ----------------------------------------------------------------------------- -->
                                                                                <script id="group_forms_tpl" type="text/x-handlebars-template">  
                                                                                
                                                                                {{#if itemCount}}
                                                                            <div class="fromsy ">
                                                                              <div class="sy-events">
                                                                                
                                                                                {{#each items}}
                                                                           
                                                                           {{#if form.title}}                                                   
                                                                           <div class="sy-title"><span>{{form.title}}</span></div>                                           
                                                                             {{/if}}
                                                                              <!--
                                                                              {{#if form.created_at}}
                                                                         <div class="sy-startdate">
                                                                           <span class="sy-heading">Start Date :</span>{{sy_date form.created_at}}
                                                                             <span class="sy-day">&nbsp;</span>
                                                                               <span class="sy-month">&nbsp;</span>
                                                                                 <span class="sy-year">&nbsp;</span>
                                                                                   </div>
                                                                                   
                                                                                   {{/if}}
                                                                                     {{#if form.expiration}}      
                                                                                     <div class="sy-enddate">
                                                                                       <span class="sy-heading">End Date :</span>{{sy_date form.expiration}}
                                                                                         <span class="sy-day">&nbsp;</span>
                                                                                           <span class="sy-month">&nbsp;</span>
                                                                                             <span class="sy-year">&nbsp;</span>
                                                                                               </div>
                                                                                               {{/if}}   -->   
                                                                                                 <div class="sy-data">
                                                                                                   
                                                                                                   {{#if form.content}}
                                                                                                <div class="sy-detail">
                                                                                                  {{{form.content}}}
                                                                                    </div>
                                                                                      {{/if}}
                                                                                        
                                                                                        {{#if form.has_downloads}}
                                                                                        <div class="sy-attachment">
                                                                                          <a href="{{../../syurl}}/publik/download/{{form.id}}" target="_blank">
                                                                                            {{form.title}}
                                                                                       </a>
                                                                                         </div>  
                                                                                         {{/if}}  
                                                                                           
                                                                                           </div>  
                                                                                           
                                                                                           {{/each}}
                                                                                             
                                                                                             </div>
                                                                                             </div>  
                                                                                             {{else}}
                                                                                              <p class="no-data"><span>No Forms</span></p>
                                                                                                {{/if}}  
                                                                                                 
                                                                                                 </script> 
                                                                                                 
                                                                                                 <!-- New SY Template -->
                                                                                                 
                                                                                                 <!-- group_events_tpln  -->
                                                                                                 <script id="group_events_tpln" type="text/x-handlebars-template">
                                                                                                 {{#if itemCount}}
                                                                                             <div class="sydefault syevents">
                                                                                               
                                                                                               {{#each items}}  
                                                                                            
                                                                                            {{#if calendar.title}}
                                                                                            <div class="sytitle">{{calendar.title}}</div>
                                                                                              {{/if}}
                                                                                                
                                                                                                {{#ifEql calendar.start_date calendar.end_date}}
                                                                                                
                                                                                                <div class="sydate">
                                                                                                  {{#if calendar.start_date}}
                                                                                               <span class="s symonth">{{sy_date calendar.start_date "month"}}</span>
                                                                                                 <span class="s syday">{{sy_date calendar.start_date "day"}}</span>
                                                                                                   <span class="s syyear">{{sy_date calendar.start_date "year"}}</span>
                                                                                                     {{/if}}
                                                                                                       </div>
                                                                                                       
                                                                                                       {{else}}
                                                                                                        
                                                                                                        <div class="sydate">
                                                                                                          {{#if calendar.start_date}} 
                                                                                                       <span class="s symonth">{{sy_date calendar.start_date "month"}}</span>
                                                                                                         <span class="s syday">{{sy_date calendar.start_date "day"}}</span>
                                                                                                           <span class="s syyear">{{sy_date calendar.start_date "year"}}</span>
                                                                                                             {{/if}}
                                                                                                               
                                                                                                               {{#if calendar.end_date}}  
                                                                                                               <span class="e syto"> to </span>
                                                                                                                 <span class="e symonth">{{sy_date calendar.end_date "month"}}</span>
                                                                                                                   <span class="e syday">{{sy_date calendar.end_date "day"}}</span>
                                                                                                                     <span class="e syyear">{{sy_date calendar.end_date "year"}}</span>
                                                                                                                       {{/if}}
                                                                                                                         </div>
                                                                                                                         
                                                                                                                         {{/ifEql}}
                                                                                                                           
                                                                                                                           <div class="sydata">
                                                                                                                             
                                                                                                                             {{#if calendar.location}}
                                                                                                                          <span class="sylocation">{{calendar.location}}</span>
                                                                                                                            {{/if}}
                                                                                                                              
                                                                                                                              
                                                                                                                              {{#if calendar.description}}
                                                                                                                              <span class="sydescription">{{{calendar.description}}}</span>
                                                                                                                                {{/if}}
                                                                                                                                  
                                                                                                                                  {{#if calendar.has_downloads}}
                                                                                                                                  <span class="syattachment"><a href="{{../../syurl}}/publik/download/{{calendar.id}}" target="_blank">For more info click here</a></span>
                                                                                                                                    {{/if}}
                                                                                                                                     
                                                                                                                                     </div>
                                                                                                                                     
                                                                                                                                     <div class="syline"></div>
                                                                                                                                     {{/each}}
                                                                                                                                     
                                                                                                                                     </div>
                                                                                                                                     {{else}}
                                                                                                                                 <p class="no-data"><span>No Events</span></p>
                                                                                                                                   {{/if}}  
                                                                                                                                    </script>
                                                                                                                                    <!-- /group_events_tpln  -->
                                                                                                                                    
                                                                                                                                    <!-- group_forms_tpln  -->
                                                                                                                                    <script id="group_forms_tpln" type="text/x-handlebars-template">
                                                                                                                                    {{#if itemCount}}
                                                                                                                         <div class="sydefault syforms">
                                                                                                                           
                                                                                                                           {{#each items}}  
                                                                                                                        
                                                                                                                        {{#if form.title}} 
                                                                                                                        <div class="sytitle">{{form.title}}</div>
                                                                                                                          {{/if}}
                                                                                                                            
                                                                                                                            <div class="sydata">
                                                                                                                              
                                                                                                                              {{#if form.content}}
                                                                                                                           <span class="sydescription">{{{form.content}}}</span>
                                                                                                                             {{/if}}
                                                                                                                               
                                                                                                                               {{#if form.has_downloads}}
                                                                                                                               <span class="syattachment"><a href="{{../../syurl}}/publik/download/{{form.id}}" target="_blank">{{form.title}}</a></span>
                                                                                                                                 {{/if}}
                                                                                                                                  
                                                                                                                                  </div>
                                                                                                                                  
                                                                                                                                  <div class="syline"></div>
                                                                                                                                  {{/each}}
                                                                                                                                  
                                                                                                                                  </div>
                                                                                                                                  {{else}}
                                                                  <p class="no-data"><span>No Forms</span></p>
                                                                    {{/if}}
                                                                     </script>
                                                                     <!-- /group_forms_tpln  -->
                                                                     
                                                                     
                                                                     <!-- group_announcements_tpln  -->
                                                                     <script id="group_announcements_tpln" type="text/x-handlebars-template">
                                                                     {{#if itemCount}}
                                                                 <div class="sydefault syannouncements">
                                                                   
                                                                   {{#each items}}  
                                                              
                                                              {{#if announcement.title}}
                                                              <div class="sytitle">{{announcement.title}}</div>
                                                                {{/if}}
                                                                  
                                                                  <div class="sydata">
                                                                    
                                                                    {{#if announcement.content}}
                                                                 <span class="sydescription">{{{announcement.content}}}</span>
                                                                   {{/if}}
                                                                     
                                                                     {{#if announcement.has_downloads}}
                                                                     <span class="syattachment"><a href="{{../../syurl}}/publik/download/{{announcement.id}}" target="_blank">Click here to download</a></span>
                                                                       {{/if}}
                                                                        
                                                                        </div>
                                                                        
                                                                        <div class="syline"></div>
                                                                        {{/each}}
                                                                        
                                                                        </div>
                                                                        {{else}}
                                                                    <p class="no-data"><span>No Announcements</span></p>
                                                                      {{/if}}
                                                                       </script>
                                                                       <!-- /group_announcements_tpln  -->                                                                                                      
                                                                       <!-- group_welcome_tpl  -->
                                                                       <script id="group_welcome_tpl" type="text/x-handlebars-template">
                                                                       {{#if itemCount}}
                                              <div class="sydefault sywelcome">
                                                {{#each items}}
                                             <div class="sydata">
                                               
                                               {{#if welcome_message.content}}
                                        <span class="sydescription">{{{welcome_message.content}}}</span>
                                          {{/if}}
                                            {{/each}} 
                                              </div>
                                              {{else}}
                                               <p class="no-data"><span>Welcome Message</span></p>
                                                 {{/if}}
                                                  </script>
                                                  <!-- /group_welcome_tpl  -->                                                                                                                                              
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  