const { invoke } = window.__TAURI__.tauri;

async function sendToPython(action, payload) {
  try {
    await invoke('send_to_python', { action, payload });
  } catch (error) {
    console.error('Failed to send to Python:', error);
  }
}

window.sendToPython = sendToPython;

async function pollPythonState() {
  try {
    const response = await fetch('http://localhost:8765/state');
    const state = await response.json();

    window.updateStatus(state.isRunning);

    if (state.waterPoint) {
      window.updatePointStatus('waterPoint', state.waterPoint.x, state.waterPoint.y);
    }

  } catch (error) {
    console.error('Failed to poll state:', error);
  }
}

setInterval(pollPythonState, 1000);