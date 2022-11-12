


set ssn_ps_251_build1=%~1-build1-20220326-0533
set ssn_ps_251_server=%~1-server-20220326-0533
set ssn_ps_251_client=%~1-client-20220326-0533


call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%ssn_ps_251_build1%*"
call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%ssn_ps_251_client%*"
call C:\sams\ps\KillProcess\KillProcess_Using_MainWindowTitle.cmd "*%ssn_ps_251_server%*"


call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd 3090
call C:\sams\ps\KillProcess\KillProcess_Using_PortNo.cmd 3091

cd %~dp0


start npm run build
rem start npm run dev
start npm run start-dev 