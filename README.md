# Requirements
- built on node v20.12.2
- needs mySQL DB

# Local Setup
1. ensure database is running and connected.
2. Open 3 terminal windows.
3. In the first terminal, run the server:
   ```bash
   cd server; \
   npm run start
   ```
4. In the second terminal, run the client:
   ```bash
   cd frontend; \
   npm run start
   ```
5. In the third terminal, run the CMS:
   ```bash
   cd cms \
   npm run start
   ```

# Deployment
1. Run the bundle script (note ssh key must be set up for the server):
   ```bash
   bash bundle.sh
   ```

