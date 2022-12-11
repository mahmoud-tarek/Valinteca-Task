export default class DOM {
    static displayError(error, position) {
        const alert = `
        <div class="error alert alert-danger mt-2 small d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
                <use xlink:href="#exclamation-triangle-fill"></use>
            </svg>
            <small>${error.message}</small>
        </div>`;

        position.insertAdjacentHTML('afterend', alert);
    }
};
