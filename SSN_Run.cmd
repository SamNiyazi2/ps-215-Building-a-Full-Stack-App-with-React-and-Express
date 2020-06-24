

call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd 3090
call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd 3091

cd %~dp0


start npm run build
rem start npm run dev
start npm run start-dev 