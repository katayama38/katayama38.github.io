function openUpdateDialog(id, task, deadline, done) {
    document.getElementById('update_id').value = id;
    document.getElementById('update_task').value = task;
    document.getElementById('update_deadline').value = deadline;
    document.getElementById('update_status').value = done;
    document.getElementById('updateDialog').style.display = 'block';
}
function openUpdateDialog(id, task, deadline, done) {
    console.log(id, task, deadline, done);
    // ここにダイアログ表示の処理を追加
}
