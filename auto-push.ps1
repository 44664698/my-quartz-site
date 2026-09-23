# auto-push.ps1
$maxRetries = 20        # Max retry attempts
$retryDelay = 10        # Delay in seconds
$attempt = 0

while ($attempt -lt $maxRetries) {
    $attempt++
    Write-Host "=== Pushing (Attempt $attempt of $maxRetries) ===" -ForegroundColor Cyan
    git push
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Push succeeded!" -ForegroundColor Green
        break
    }
    
    if ($attempt -lt $maxRetries) {
        Write-Host "Push failed. Retrying in $retryDelay seconds..." -ForegroundColor Yellow
        Start-Sleep -Seconds $retryDelay
    } else {
        Write-Host "Reached max retries ($maxRetries). Push failed." -ForegroundColor Red
    }
}