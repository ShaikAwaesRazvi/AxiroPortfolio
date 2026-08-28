10th Aug 2026 : We initialized frontend.

10th Aug 2026 : We initialized frontend.

27th Aug
Faqs and Services section added to portfolio where people can see q and a's and what services can use our website








Versions of our application
Basic:
We will provide business with client website and admin dashboard
    In client website:
        Features:
            1. Client can book an appointment based on service and styist and choose their date and time accordingly.
            2. Client will get an confirmation email with date, stylist name and time.
            3. In the same confirmation email, they will recieve cancel link where they can cancel appointment within 12 hours.
        Limitations:
            1. If their selected stylist calls in sick, They wont get an email for rescheduling or cancelling(store has to handle this manually as this feature requires seperate profile for employee).

    In admin side:
        Features:
            1. Admin can Add employee, delete employee, update employee.
            2. Delete employee: Admin can see all the employees in one page woth their profile picture and name and update and delete options on right side.
            3. When employee clicks on update employee, he will be able to update the fields of employee.
            4. Nav Bar => Dashboard (welcome text)
                          Employee => Employee Table > Edit & Delete
                                   => Add Employee button > Form > Table#1
                          Services => Services Table > Edit & Delete
                                   => Add Services button > Form > Table#1  
                          Gallery  => 1. Hair
                                      [] [] [] [] ... [+]

                                      2. Nails
                                      [] [] [] [] ... [+]

                                      Generate these based on added services even when pics are not uploaded.
                     *   Scheduling => Calender
                                     Mon   Tues   Wedn       
                                E    10-8  
                                J    4- 8
                                D    -
                          Logout in bottom left.


        

        Table structure
            1. Adding employee: Employee_uid(unique identifier), emp_fname,emp_lname,profile_picture,emp_email,emp_phonenum,emp_type.
            2. Service: Service_id(uid), service name, cost, timing
                Keratin Treatment : 1 hr
                Straightening: 1:30 hr
                Trimming : 30 min

          
          
          *  10 - 8

            KT > Emily > 

            Emily
            Keratin Treatment 11:30 12:30 1:30
            Straightening


            Nick
            Keratin Treatment
            Trimming





          





            4. Nav Bar => Dashboard (visualization for premium), 




Ques

* => unsure where to include
Ask gpt what to include in our versions (scheduling or not)


To do 
1. Need to decide the limitation for admin panel.
2. Need to decide what to include in what plans both features & limitation.
3. Content of FAQ and services needs to be changed.
4. Styling change, title should be big and highlighted.
5. Add AI image in "what is it for" section.