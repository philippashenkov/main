import psutil
import subprocess
import logging
import keyboard
import time

# Set up logging
logging.basicConfig(filename='log.txt', level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s')

# Find the process ID of the existing React app
for proc in psutil.process_iter(['pid', 'name']):
    if proc.info['name'] == 'node.exe':
        pid = proc.info['pid']
        break

# Connect to the existing process
cmd = f'cmd /c "tail -f -n 1000 {pid}"'
process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, shell=True)

try:
    while True:
        output = process.stdout.readline()
        if output:
            logging.info(output.strip())
            print(output.strip())  # Print the output to the console
        if keyboard.is_pressed('esc') or keyboard.is_pressed('ctrl+c'):
            print("\033[91mЛогирование остановлено.\033[0m")
            break
        time.sleep(0.1)
except KeyboardInterrupt:
    print("\033[91mЛогирование остановлено.\033[0m")

print("\033[92mКонец логирования.\033[0m")