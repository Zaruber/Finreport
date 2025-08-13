document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('openReports');
	btn?.addEventListener('click', async () => {
		await chrome.tabs.create({ url: chrome.runtime.getURL('reports.html') });
	});
});


