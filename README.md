10th Aug 2026 : We initialized frontend.

10th Aug 2026 : We initialized frontend.

27th Aug
Faqs and Services section added to portfolio where people can see q and a's and what services can use our website

28th Aug
1. Added all the links in navbar.
2. Changed the whole styling of "who is it for" section.
3. In "why axiro" section edited the content of cards.
4. In "pricing" section changed terminologies.
5. "Faq" content has been modified.
6. In footer section added more content.
7. In "get started" form, changed the styling of placeholders.








# Axiro Systems — Application Versions

Two tiers of the platform: **Basic** (manual-first, core booking) and **Premium** (automated, staff-aware, reporting-enabled). Premium is designed to directly resolve every limitation listed under Basic.

---

## BASIC

### Client Website

**Features**
1. Client can book an appointment by selecting a service and stylist, then choosing their preferred date and time.
2. Client receives a confirmation email containing the date, stylist name, and time.
3. The same confirmation email includes a cancellation link, allowing the client to cancel without contacting the store.

**Limitations**
1. If the assigned stylist is unavailable (e.g. calls in sick), the client does not receive an automatic email to reschedule or cancel. This must be handled manually by the store, since automated handling requires individual employee profiles with linked availability.
2. Clients cannot reschedule their own appointment. They can only cancel and would need to book a new appointment separately.
3. There is no SMS reminder. Clients rely solely on the confirmation email, with no follow-up reminder closer to the appointment date.

### Admin Dashboard

**Features**
1. Admin can add, update, and delete employees.
2. Employee list view: all employees displayed on one page with profile picture, name, and Edit/Delete actions on the right.
3. Clicking "Update Employee" opens a form pre-filled with that employee's fields for editing.
4. Navigation structure:
   - **Dashboard** — welcome/landing view
   - **Employees** — Employee Table (Edit & Delete) → "Add Employee" button opens a form → new entry appears in the table
   - **Services** — Services Table (Edit & Delete) → "Add Service" button opens a form → new entry appears in the table
   - **Gallery** — auto-generated sections per active service (e.g. "Hair", "Nails"), each showing an image grid with a "+" tile to upload. Sections generate automatically based on added services, even before any photos are uploaded.
   - **Scheduling** — a simple read-only weekly calendar view showing which employee is booked at which times (manually referenced by Admin; not tied to automated notifications)
   - **Logout** — bottom left

**Limitations**
1. There is no client management view. Admin can see individual appointments but has no consolidated client list, booking history, or repeat-client tracking.

---

## PREMIUM

Premium includes everything in Basic, plus the following.

### Client Website

**Features**
1. Everything in Basic, plus:
2. Each stylist has an individual profile with linked availability. If a stylist is marked unavailable (sick day, time off), any client with an affected appointment is automatically emailed to reschedule or cancel, no manual admin intervention required.
3. Clients can reschedule their own appointment directly from the confirmation email link, choosing a new available date, time, or stylist without needing to cancel and rebook from scratch.
4. Clients receive both SMS and email reminders ahead of their appointment, reducing no-shows.



### Admin Dashboard

**Features**
1. Everything in Basic, plus:
2. Each employee gets their own login to view and manage their personal schedule, mark themselves unavailable, and trigger the automated client-rescheduling flow.
3. Client management view: a searchable list of all clients, their booking history, total visits, and last appointment, so staff can spot repeat clients at a glance.email is unique identifier.
4. Custom notification rules: Admin can configure how far in advance reminders are sent (e.g. 24 hours and 2 hours before) and choose SMS, email, or both per client preference.


---

## Summary Table

| Capability | Basic | Premium |
|---|---|---|
| Book by service + stylist | ✅ | ✅ |
| Email confirmation | ✅ | ✅ |
| Cancel via email link | ✅ | ✅ |
| Reschedule via email link | ❌ | ✅ |
| Auto-reschedule on stylist unavailability | ❌ | ✅ |
| SMS reminders | ❌ | ✅ |
| Employee CRUD (add/edit/delete) | ✅ | ✅ |
| Individual employee logins | ❌ | ✅ |
| Client management / history view | ❌ | ✅ |
| Auto-generated service gallery | ✅ | ✅ |
| Custom notification timing/channel | ❌ | ✅ |
        

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
1. Change content of pricing.
2. Feature Card color, LOGO in footer.


7 sept:
Owner has to pay on time in order to keep the site live