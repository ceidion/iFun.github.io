        $(function() {
                var typeaheadSource = ['ACTSC 221', 'ACTSC 231', 'ACTSC 232', 'ACTSC 331', 'ACTSC 371', 'ACTSC 372', 'ACTSC 431', 'ACTSC 432', 'ACTSC 445', 'ACTSC 831', 'ACTSC 845', 'AFM 101', 'AFM 102', 'AFM 211', 'AFM 231', 'AFM 241', 'AFM 272', 'AFM 274', 'AFM 280', 'AFM 322', 'AFM 333', 'AFM 351', 'AFM 363', 'AFM 424', 'AFM 433', 'AFM 481', 'AFM 491', 'AMATH 231', 'AMATH 242', 'AMATH 250', 'AMATH 332', 'AMATH 351', 'AMATH 353', 'ANTH 100', 'ARBUS 202', 'ARBUS 202', 'ARBUS 301', 'BIOL 110', 'BIOL 120', 'BIOL 130', 'BIOL 239', 'BIOL 240', 'BIOL 240', 'BIOL 241', 'BIOL 273', 'BIOL 273L', 'BIOL 303', 'BIOL 308', 'BIOL 309', 'BIOL 342', 'BIOL 354', 'BIOL 373', 'BIOL 373L', 'BUS 111W', 'BUS 121W', 'BUS 231W', 'BUS 247W', 'BUS 352W', 'BUS 353W', 'BUS 357W', 'BUS 362W', 'BUS 387W', 'BUS 393W', 'BUS 395W', 'BUS 397W', 'BUS 398W', 'BUS 408W', 'BUS 413W', 'BUS 417W', 'BUS 423W', 'BUS 443W', 'BUS 447W', 'BUS 452W', 'BUS 453W', 'BUS 466W', 'BUS 467W', 'BUS 473W', 'BUS 477W', 'BUS 481W', 'BUS 486W', 'BUS 487W', 'BUS 497JW', 'BUS 497KW', 'CHE 101', 'CHE 102', 'CHE 121', 'CHE 161', 'CHE 211', 'CHE 231', 'CHE 241', 'CHE 312', 'CHE 322', 'CHE 330', 'CHE 360', 'CHE 420', 'CHE 480', 'CHE 516', 'CHEM 120', 'CHEM 123', 'CHEM 212', 'CHEM 233', 'CHEM 237', 'CHEM 237L', 'CHEM 254', 'CHEM 265', 'CHEM 265L', 'CHEM 267', 'CHINA 101R', 'CHINA 120R', 'CHINA 201R', 'CIVE 121', 'CIVE 205', 'CIVE 222', 'CIVE 240', 'CIVE 280', 'CIVE 353', 'CIVE 413', 'CIVE 414', 'CIVE 444', 'CIVE 486', 'CIVE 491', 'CIVE 512', 'CLAS 104', 'CO 250', 'CO 327', 'CO 342', 'CO 351', 'CO 454', 'CO 471', 'CO 671', 'COMM 321', 'COMM 421', 'CS 100', 'CS 115', 'CS 116', 'CS 136', 'CS 200', 'CS 234', 'CS 240', 'CS 241', 'CS 245', 'CS 246', 'CS 247', 'CS 251', 'CS 330', 'CS 338', 'CS 341', 'CS 348', 'CS 349', 'CS 350', 'CS 360', 'CS 370', 'CS 371', 'CS 430', 'CS 432','CS 436','CS 442', 'CS 444', 'CS 445', 'CS 446','CS 447','CS 448','CS 449','CS 450', 'CS 452', 'CS 454', 'CS 456', 'CS 458', 'CS 466', 'CS 475', 'CS 482', 'CS 485', 'CS 486', 'CS 488', 'CS 490', 'CS 646', 'CS 649', 'CS 652', 'CS 654', 'CS 656', 'CS 658', 'CS 666', 'CS 675', 'CS 682', 'CS 686', 'DUTCH 101', 'DUTCH 102', 'EARTH 121', 'EARTH 221', 'EARTH 232', 'ECE 103','ECE 105', 'ECE 106', 'ECE 124', 'ECE 150','ECE 155', 'ECE 206', 'ECE 207', 'ECE 209', 'ECE 222','ECE 224', 'ECE 242','ECE 250', 'ECE 254', 'ECE 309', 'ECE 316', 'ECE 327', 'ECE 331', 'ECE 351', 'ECE 358', 'ECE 375', 'ECE 380', 'ECE 403', 'ECE 413', 'ECE 414', 'ECE 429', 'ECE 432', 'ECE 445', 'ECE 452', 'ECE 454', 'ECE 455', 'ECE 457', 'ECE 458', 'ECE 462', 'ECE 463', 'ECE 473', 'ECE 475', 'ECE 481', 'ECE 486', 'ECE 750', 'ECE 770', 'ECON 101', 'ECON 101', 'ECON 102', 'ECON 102', 'ECON 102', 'ECON 201', 'ECON 201', 'ECON 202', 'ECON 202', 'ECON 211', 'ECON 221', 'ECON 231', 'ECON 301', 'ECON 301', 'ECON 302', 'ECON 321', 'ECON 357', 'ECON 361', 'ECON 371', 'ECON 372', 'ECON 401', 'ECON 402', 'ECON 483', 'ENGL 101B', 'ENGL 108A', 'ENGL 109', 'ENGL 109', 'ENGL 200B', 'ENGL 200B', 'ENGL 201', 'ENGL 210F', 'ENGL 251B', 'ENGL 306A', 'ENGL 309B', 'ENGL 410D', 'ENGL 460D', 'ENVE 127', 'ENVE 320', 'ENVE 321', 'ENVS 200', 'ESL 129R', 'GENE 123', 'GEOG 203', 'GEOG 426', 'GER 101', 'GER 102', 'GER 201', 'GER 202', 'GERON 210', 'GERON 255', 'HLTH 210', 'HLTH 260', 'HRM 200', 'HRM 303', 'HRM 307', 'INTST 101', 'JS 114', 'KIN 205', 'KIN 210', 'KIN 222', 'KIN 242', 'LS 101', 'MATH 106', 'MATH 115', 'MATH 117', 'MATH 118', 'MATH 119', 'MATH 127', 'MATH 127', 'MATH 128', 'MATH 128', 'MATH 135', 'MATH 136', 'MATH 136', 'MATH 137', 'MATH 138', 'MATH 207', 'MATH 213', 'MATH 218', 'MATH 225', 'MATH 235', 'MATH 235', 'MATH 237', 'MATH 239', 'MATH 245', 'MATH 247', 'ME 101', 'ME 115', 'ME 203', 'ME 212', 'ME 219', 'ME 220', 'ME 250', 'ME 262', 'ME 303', 'ME 321', 'ME 321', 'ME 340', 'ME 351', 'ME 354', 'ME 423', 'ME 435', 'ME 436', 'ME 456', 'ME 459', 'ME 548', 'ME 559', 'ME 561', 'ME 566', 'ME 596', 'ME 735', 'MNS 221', 'MSCI 261', 'MSCI 261', 'MSCI 331', 'MSCI 346', 'MSCI 434', 'MSCI 445', 'MSCI 452', 'MSCI 531', 'MTE 111', 'MTE 119', 'MTE 120', 'MTE 140', 'MTE 320', 'MTHEL 131', 'MUSIC 100', 'MUSIC 140', 'NE 217', 'NE 226', 'NE 232', 'NE 242', 'NE 318', 'NE 333', 'NE 334', 'NE 343', 'NE 344', 'PACS 201', 'PACS 202', 'PHIL 145', 'PHIL 201', 'PHIL 202', 'PHIL 215', 'PHIL 215', 'PHIL 220', 'PHIL 256', 'PHIL 324', 'PHIL 384', 'PHYS 112', 'PHYS 112', 'PHYS 122', 'PHYS 122', 'PHYS 234', 'PHYS 239', 'PHYS 242', 'PHYS 263', 'PHYS 270', 'PHYS 280', 'PHYS 334', 'PHYS 358', 'PHYS 363', 'PHYS 364', 'PHYS 380', 'PLAN 484', 'PMATH 330', 'PMATH 332', 'PMATH 336', 'PMATH 347', 'PMATH 352', 'PMATH 360', 'PMATH 450', 'PSCI 231', 'PSCI 260', 'PSCI 334', 'PSYCH 101', 'PSYCH 207', 'PSYCH 211', 'PSYCH 213R', 'PSYCH 256', 'PSYCH 306', 'PSYCH 312', 'PSYCH 349R', 'PSYCH 353', 'PSYCH 354R', 'REC 251', 'REC 280', 'RS 100', 'RS 114', 'RS 170', 'RS 235', 'SCI 238', 'SCI 255', 'SDS 131R', 'SDS 150R', 'SDS 210R', 'SDS 215R', 'SDS 250R', 'SDS 251R', 'SDS 350R', 'SE 212','SE 350','SE 465','SE 390','SE 464', 'SWREN 120R', 'SWREN 222R', 'SWREN 224R', 'SWREN 250R', 'SWREN 300R', 'STAT 230', 'STAT 231', 'STAT 330', 'STAT 331', 'STAT 333', 'STAT 334', 'STAT 371', 'STAT 372', 'STAT 430', 'STAT 431', 'STAT 443', 'STAT 830', 'SYDE 112', 'SYDE 114', 'SYDE 162', 'SYDE 182', 'SYDE 192', 'SYDE 311', 'SYDE 351', 'SYDE 351', 'SYDE 381', 'SYDE 383']; 
                $('#course1').typeahead({          
                    source: typeaheadSource
                });
                $('#course2').typeahead({          
                    source: typeaheadSource
                });
                $('#course3').typeahead({          
                    source: typeaheadSource
                });
                $('#course4').typeahead({          
                    source: typeaheadSource
                });
                $('#course5').typeahead({          
                    source: typeaheadSource
                });
                $('#course6').typeahead({          
                    source: typeaheadSource
                });
                if ($.browser.webkit){
                     document.getElementById("helpBlock").style.display = "inline";
                }
                var url = "https://api.uwaterloo.ca/v2/courses/ECE/250/examschedule.json?key=44d2af470a7abed99237188663c921e4";
                $.getJSON(url,function (d) {
                    var status = d.meta.message;
                    var api_num = d.meta.requests;
                    document.getElementById("api_request_time").innerHTML += " " + api_num;
                    if(status === "No data returned" || status == "401")
                    {
                        document.getElementById("notavailable").style.display = "inline";
                    }
                    else
                    {
                        document.getElementById("available").style.display = "inline";
                    }
                });

            });

                $(document).on('click',"#submitbutton",function(e){
                        e.preventDefault(); //holy cow without this line nothing is working
                        var count_course = 0;
                        var url_prev = "https://api.uwaterloo.ca/v2/courses/";
                        var url_end = "/examschedule.json?key=44d2af470a7abed99237188663c921e4";
                        var text_dowload = "";
                        text_dowload += "BEGIN:VCALENDAR\nCALSCALE:GREGORIAN\nVERSION:2.0\n" + "METHOD:PUBLISH\n";
                        if($("#course1").val() != "")
                        {
                           count_course++;
                           if($("#section1").val() != "")
                           {
                                var section1_num = $("#section1").val() - 1;
                           }
                           else
                           {
                                var section1_num = 0;
                           }
                           var course1_text = $("#course1").val().replace(' ','/');
                            $.getJSON(url_prev + course1_text + url_end,function (d) {
                                if(d.meta.message == "No data returned")
                                {
                                    alert(course1_text + "'s examschedule is not available yet ");
                                }
                                else
                                {
                                    var course_name = d.data.course;
                                    var location_text = d.data.sections[section1_num].location;
                                    var date = d.data.sections[section1_num].date;
                                    var start_t = d.data.sections[section1_num].start_time;
                                    var end_t = d.data.sections[section1_num].end_time;
                                    var sections = d.data.sections[section1_num].section;
                                    displaytext(course_name,location_text,date,start_t,end_t,sections);                         
                                }

                            });
                        }
                       if($("#course2").val() != "")
                        {
                           count_course++;
                            var course2_text = $("#course2").val().replace(' ','/');
                           if($("#section2").val() != "")
                           {
                                var section2_num = $("#section2").val() - 1;
                           }
                           else
                           {
                                var section2_num = 0;
                           }
                            $.getJSON(url_prev + course2_text + url_end,function (d) {
                                if(d.meta.message == "No data returned")
                                {
                                    alert(course2_text + "'s examschedule is not available yet ");
                                }
                                else
                                {
                                    var course_name2 = d.data.course;
                                    var location_text2 = d.data.sections[section2_num].location;
                                    var date2 = d.data.sections[section2_num].date;
                                    var start_t2 = d.data.sections[section2_num].start_time;
                                    var end_t2 = d.data.sections[section2_num].end_time;
                                    var sections2 = d.data.sections[section2_num].section;
                                    displaytext(course_name2,location_text2,date2,start_t2,end_t2,sections2);
                                }
                            
                            });
                        }
                        if($("#course3").val() != "")
                        {
                            count_course++;
                            var course3_text = $("#course3").val().replace(' ','/');
                            if($("#section3").val() != "")
                            {
                                var section3_num = $("#section3").val() - 1;
                            }
                            else
                            {
                                var section3_num = 0;
                            }
                            $.getJSON(url_prev + course3_text + url_end,function (d) {
                                if(d.meta.message == "No data returned")
                                {
                                    alert(course3_text + "'s examschedule is not available yet ");
                                }
                                else
                                {
                                    var course_name3 = d.data.course;
                                    var location_text3 = d.data.sections[section3_num].location;
                                    var date3 = d.data.sections[section3_num].date;
                                    var start_t3 = d.data.sections[section3_num].start_time;
                                    var end_t3 = d.data.sections[section3_num].end_time;
                                    var sections3 = d.data.sections[section3_num].section;
                                    displaytext(course_name3,location_text3,date3,start_t3,end_t3,sections3);
                                }
                            });
                        }
                         if($("#course4").val() != "")
                        {
                           count_course++;
                           var course4_text = $("#course4").val().replace(' ','/');
                            if($("#section4").val() != "")
                            {
                                var section4_num = $("#section4").val() - 1;
                            }
                            else
                            {
                                var section4_num = 0;
                            }
                            $.getJSON(url_prev + course4_text + url_end,function (d) {
                                if(d.meta.message == "No data returned")
                                {
                                    alert(course4_text + "'s examschedule is not available yet ");
                                }
                                else
                                {
                                    var course_name4 = d.data.course;
                                    var location_text4 = d.data.sections[section4_num].location;
                                    var date4 = d.data.sections[section4_num].date;
                                    var start_t4 = d.data.sections[section4_num].start_time;
                                    var end_t4 = d.data.sections[section4_num].end_time;
                                    var sections4 = d.data.sections[section4_num].section;
                                    displaytext(course_name4,location_text4,date4,start_t4,end_t4,sections4);
                                }
                            });
                        }
                        if($("#course5").val() != "")
                        {
                           count_course++;
                           var course5_text = $("#course5").val().replace(' ','/');
                            if($("#section5").val() != "")
                            {
                                var section5_num = $("#section5").val() - 1;
                            }
                            else
                            {
                                var section5_num = 0;
                            }
                            $.getJSON(url_prev + course5_text + url_end,function (d) {
                                if(d.meta.message == "No data returned")
                                {
                                    alert(course5_text + "'s examschedule is not available yet ");
                                }
                                else
                                {
                                    var course_name5 = d.data.course;
                                    var location_text5 = d.data.sections[section5_num ].location;
                                    var date5 = d.data.sections[section5_num ].date;
                                    var start_t5 = d.data.sections[section5_num ].start_time;
                                    var end_t5 = d.data.sections[section5_num ].end_time;
                                    var sections5 = d.data.sections[section5_num ].section;
                                    displaytext(course_name5,location_text5,date5,start_t5,end_t5,sections5);
                                }
                            });
                        }
                        if($("#course6").val() != "")
                        {
                           count_course++;
                           var course6_text = $("#course6").val().replace(' ','/');
                            if($("#section6").val() != "")
                            {
                                var section6_num = $("#section6").val() - 1;
                            }
                            else
                            {
                                var section6_num = 0;
                            }
                            $.getJSON(url_prev + course6_text + url_end,function (d) {
                                if(d.meta.message == "No data returned")
                                {
                                    alert(course1_text + "'s examschedule is not available yet ");
                                }
                                else
                                {
                                    var course_name6 = d.data.course;
                                    var location_text6 = d.data.sections[section6_num].location;
                                    var date6 = d.data.sections[section6_num].date;
                                    var start_t6 = d.data.sections[section6_num].start_time;
                                    var end_t6 = d.data.sections[section6_num].end_time;
                                    var sections6 = d.data.sections[section6_num].section;
                                    displaytext(course_name6,location_text6,date6,start_t6,end_t6,sections6);
                                }
                            });
                        }
                        
                        function displaytext(course_name,location,date,start_time,end_time,section)
                        {
                            count_course--;
                            text_dowload += "BEGIN:VEVENT\n" + "STATUS:CONFIRMED\n" + "SEQUENCE:0\n";
                            var date_text = "";
                            for (var i = 0; i< date.length; i++) {
                                if(date[i] != "-")
                                {
                                    date_text+= date[i];
                                }
                            }
                            text_dowload += "DTSTART:" + date_text + "T" + Converttime(start_time) + "00" +"\n";
                            text_dowload += "DTEND:" + date_text + "T" + Converttime(end_time) + "00" +"\n";
                            text_dowload += "LOCATION:" + location +"\n" + "SUMMARY:" + course_name + " section " + section + " Exam in " + location + "\n";
                            text_dowload += "END:VEVENT" + "\n";
                            if(count_course == 0)
                            {
                                text_dowload += "END:VCALENDAR" +"\n";
                                var blob = new Blob([text_dowload], {type: "text/plain;charset=utf-8"});
                                saveAs(blob, "Final Exam Schedule.ics");
                            }

                        }
                        
                        function Converttime(time)
                        {
                            var count = 0;
                            if(time[time.length - 2] == "P")
                            {
                                var tmp = "";
                                var flag = false;
                                var time_text = "";
                                while(count < time.length - 3)
                                {
                                  
                                    if(time[count] == ":")
                                    {
                                        flag = true;
                                        count++;
                                    }

                                    if(!flag)
                                    {
                                        tmp += time[count];
                                        count++;
                                    }
                                    else
                                    {
                                        time_text += time[count];
                                        count++;
                                    }
                                }
                                var a = parseInt(tmp);
                                //avoid adding 12 to 12pm
                                if(a != 12)
                                {
                                    a = a+12;
                                }        
                                return a.toString() + time_text;    
                            }
                            else
                            {
                                count = 0;
                                if(time[0]!= 1)
                                {
                                    var text_am = "0";
                                }
                                else
                                {
                                    var text_am = "";
                                }
                                
                                while(count < time.length - 3)
                                {
                                    
                                    if(time[count] != ":")
                                    {
                                        text_am += time[count];
                                        count++;
                                        
                                    }
                                    else
                                    {
                                        count++;
                                    }
                                }
                                return text_am;
                            }
                        }                     
                    });
