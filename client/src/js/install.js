const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log("beforeinstallprompt", event);
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log("butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    //Show prompt
    promptEvent.prompt();

    //Log results
    const userChoice = await promptEvent.userChoice;
    if (userChoice.outcome === "accepted") {
        console.log("User accepted");
    } else {
        console.log("User dismissed")
    }

    //Reset deferred prompt variable
    window.deferredPrompt = null;

    //Hide install button
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("Congratulations!", "appinstalled", event);
    window.deferredPrompt = null;
});
