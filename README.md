<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Crimson+Text&weight=600&size=30&pause=1000&color=000000&center=true&vCenter=true&multiline=true&width=800&height=60&lines=%F0%9F%91%8B+Hello%2C+and+Welcome." alt="Typing SVG" /></a>

# How to run project:

## Step 1.
- cd client (go to the client folder)
- npm i
- cd server (go to the server folder)
- npm i
- cd .. (back to the root folder)
- npm i

## Step 2.
- npm run start (in the root folder)
You should see in the terminal messages: 'Server is running at post 3000.' &  '√ Compiled successfully'. 
Then http://localhost:4200/ should automatically run at your default browser.

# CORS issue: 

### Describing issue:
Request by links from API sometimes (randomly) has a CORS error.
The same link could work properly or with an error.

### Solvation:
Server handles CORS errors. Added cors package and credentials(token).
Video html tag still have the error and in the client/shared/validationLinkHelper.ts I've made validation if request by the link is ok or not. Then in the VideoService, this function is used. I added comments in the code for faster understanding what is going on there. 

### Alternative approach:
If there is no CORS issue, the function from client/shared/validationLinkHelper.ts handle all video streaming errors for better user experience.

## Video loading spinner info:
By default in video added controls, which automatically show spinner. One of the task was adding own loading spinner. I added it, but do not turn off controls (that would disable default spinner and controls) for user comfort. So you can see both spinners custom and default.

# Run tests: 
- cd client (go to the client folder)
- npm run test 
