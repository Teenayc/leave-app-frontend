# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# API DOCUMENTATION

Databases and tables

# Database
- cpd_learn
# Tables

# Database
- ipmz_branchreceipts
# Tables
  - invoicedetails
    * not sure - last update 2022

  - invoiceitems
    * not sure - last update 2022

  - paymentmethods
    * not in use

  - receiptdetail
    * not sure - last update 2023 February

  - receiptitems
    * not sure - last update 2023 February

  - receiptreversals
    * not in use

# Database
- ipmz_membership
# Tables
  - annualsubmailsetup
    * in use by staff admins

  - annualsubsinvoices
    * in use

  - assignmentsubmission
    * in use by students and admin
  
  - audit_trail
    * not in use

  - branches
    * in use - to show available branches

  - cpdattandance
    * in use

  - cpdprogram
    * in use

  - cpds
    * in use

  - cpdtypes
    * in use

  - examcenters
    * in use

  - examdisplinary
    * not in use - for example student caught cheating

  - examgrades
    * in use

  - examregistration
    * in use

  - examregistrationmodules
    * in use

  - exemptionregistration
    * not in use

  - experience
    * not sure

  - hrlevelpositions
    * not sure

  - hrlevels
    * not sure

  - memberemployment
    * not sure 

  - membergrade
    * in use

  - members
    * in use
  
  - onlineexams
    * in use

  - onlineexamscandidates
    * in use

  - pastelinvoiceitems
    * in use - in intellectus under payments from pastel

  - pastelinvoices
    * not in use - last update in 2019

  - pastelsync
    * in use by pastel and syncing tool

  - pastelproducts
    * not sure

  - people
    * in use - by staff only

  - programs
    * not sure

  - programsubjects
    * not sure

  - publishassignments
    * in use

  - publishexams
    * in use

  - qualifications
    * in use

  - sessions
    * in use

  - studentdiplomas
    * not sure - last update 2019

  - studentsubjects
    * not sure - last update 2020

  - studentsubjects_old
    * not sure - last update 2020

  - subjects
    * in use

  - townscities
    * not sure


# Database
- ipmz_online_applications
# Tables
  - 

# Database
- ipmz_portal
# Tables
  - gt-people
    * not in use

  - hd_requests
    * not in use

  - memberpositions
    * not sure but not important - it has membernumber e.g 49503 and position e.g HRLP-4

  - portalannualsubs
    * not in use

  - portassignments
    * not in use

  - portalassignmentsfiles
    * not in use

  - portalassignmentsubmission
    * not in use

  - portalchat
    * not in use

  - portalcomments
    * not in use

  - portalcvs
    * not in use

  - portaldiscussions
    * not in use

  - portalebrary
    * in use - it has portal documents

  - portalebrarycategory
    * in use - it has documents categories

    # examcenters in ipmz_membership database
  - portalexamcenters
    * in use - it has exam centers

  - portalexammakersresults
    * not in use
  
  - portalexams
    * not in use
  
  - portalexamsitting
    * not in use
  
  - portalexamresults
    * not in use by students
  
  - portalhits
    * not in use

  - portalinvoiceitems
    * not in use

  - portalinvoices
    * not in use

  - portalmakers
    * in use - all registered markers and moderators

  - portalmakerssubjects
    * in use - to identify marker and session for a subject

  - portalmembergrades
    * in use - to classify members

  - portalmembers
    * not in use

  - portalmembersubs
    * not in use

  - portalmodersubjects
    * in use - to identify moderators, session and subjects

  - portalnotifications
    * in use - for dashboard announcements etc

  - portalnotificationviews
    * in use - for members who viewed the notification etc

  - portalpayments
    * in use - from pastel


  - portalproducts
    * in use - modules, exam codes and prices


  - portalprofpics
    * in use

  - portalprogramsubjects
    * in use

  - portalprogramtypes
    * not in use

  - portalstudentmaterial
    * in use

  - portalstudentprogram
    * not in use


  - portalstudentsubjects
    * not in use

  - portalstudyprograms
    * not in use


  - portalsubjects
    * in use

  - portalusers
    * in use by members only
    * students are login using memberNumber and passWord, if the acclocked===1 it doesnt login
    * after login the system checks user rights to access files

# Database
- ipmz_registration
# Tables

# Database
- ipmz_support
# Tables

# Database Models
A database model is a conceptual representation of a database structure that defines how data is organized, stored, and accessed within a database system. It describes the logical structure and relationships between data elements. A database model serves as a blueprint for creating and managing a database.

# Database Models
I developed 6 database directories for 6 active databases in our Microsoft Azure.
Inside Azure we have 10 Databases that are created by Ngoni Utete.
In each directory we have models that connect to the databases and this API

# Database Config


# Completed API Requests
- get your using member number - GET METHOD
- send forgot password for students and send email link - POST METHOD - user details should be exactly equally to 1 of email,nationalid,address, pphone or dob
- student login using member number and password - POST METHOD
- get all the members in the database - GET METHOD
- 

# Pending API Requests
