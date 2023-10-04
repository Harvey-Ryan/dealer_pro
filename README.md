# dealer-pro
Built using MERN:
- DB hosted on Atlas
- Vite for React

Completed:

  - Create Tradesheets: /tradesheet

  - Edit Tradesheets: /tradesheet/id

  - Display All Vehicles: /dashboard

  - Delete Tradesheets

  - DB hosted w/ Atlas

  - EC2 instance up and running

Backlog:

  - Figure out why GitHub Node.js build script is struggling to follow the path to package.json

  - Finish up Deployment with Github Workflow scripts

  - Re-work /tradesheet && /tradesheet/id to be more user-friendly

  - Create a printer-friendly display of a single vehicle object

  - Re-work UI and CSS with a more polished presentation

  - Login/Reg:
    -- Ensure user is logged in on all routes.
     -- Store and re-use User's 'storename' on /tradesheet.
      -- Only allow access to data for vehicles associated
         w/ logged-in User's 'storename'.
